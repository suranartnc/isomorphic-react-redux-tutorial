import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import {
	promiseResolverMiddleware,
	loggerMiddleware
} from './middlewares';

import reducers from './reducers';

export default (apiClient, initialState) => {
	const middlewares = [
		thunk,
		promiseResolverMiddleware(apiClient),
		loggerMiddleware
	];

	return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
}