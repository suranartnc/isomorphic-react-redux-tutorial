const isPromiseObject = promise => {
	return typeof promise === 'function';
};

const isValidActionTypes = types => {
	const { request, success, failure } = types;
	return request && success && failure;
};

export default (client) => {
	return ({ dispatch, getState }) => next => action => {
		const { types, promise, onPromiseResolve, ...rest } = action;

		if (! isPromiseObject(promise) || ! isValidActionTypes(types)) {
			return next(action);
		}

		const { request, success, failure } = types;

		// dispatch request action
		next({ ...rest, type: request });

		return promise(client).then(response => {
			if (response.status >= 400) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}

			return response.json();
		}).then(data => {
			// dispatch success action
			next({ ...rest, result: data, type: success });

			if (typeof onPromiseResolve === 'function') {
				return dispatch(onPromiseResolve(data));
			}
		}).catch(error => {
			// dispatch failure action
			next({ ...rest, error, type: failure });
		});
	};
};