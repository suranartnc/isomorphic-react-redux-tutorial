import fetch from 'isomorphic-fetch';

const baseApiUrl = 'https://api.stackexchange.com/2.2';

const getFullUrl = (uri, params = {}) => {
	let url = `${baseApiUrl}${uri}`;

	const queryString = buildQueryString(params);
	if (queryString) {
		const queryOperator = uri.indexOf('?') === -1 ? '?' : '&';
		url += `${queryOperator}${queryString}`;
	}

	return url;
};

const buildQueryString = (params = {}) => {
	if (Object.keys(params).length === 0) {
		return null;
	}

	let queryString = [];

	Object.keys(params).forEach(key => {
		queryString.push(`${key}=${params[key]}`);
	});

	return queryString.join('&');
};

const get = (uri, params = {}) => {
	const url = getFullUrl(uri, params);
	return fetch(url);
};

export default class ApiClient {
	findQuestions() {
		return get('/questions', {
			order: 'desc',
			sort: 'activity',
			site: 'stackoverflow'
		});
	}

	searchQuestions(keyword) {
		return get('/search/advanced', {
			order: 'desc',
			sort: 'activity',
			site: 'stackoverflow',
			q: keyword
		});
	}

	findQuestion(id) {
		return get(`/questions/${id}`, {
			order: 'desc',
			sort: 'activity',
			site: 'stackoverflow',
			filter: 'withbody'
		});
	}
}