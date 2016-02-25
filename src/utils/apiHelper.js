import fetch from 'isomorphic-fetch';

const baseApiUrl = 'http://localhost:3034';

export function getFullUrl(uri, params = {}) {
	let url = `${baseApiUrl}${uri}`;

	const queryString = buildQueryString(params);
	if (queryString) {
		const queryOperator = uri.indexOf('?') === -1 ? '?' : '&';
		url += `${queryOperator}${queryString}`;
	}

	return url;
};

export function buildQueryString(params = {}) {
	if (Object.keys(params).length === 0) {
		return null;
	}

	let queryString = [];

	Object.keys(params).forEach(key => {
		queryString.push(`${key}=${params[key]}`);
	});

	return queryString.join('&');
};

export function get(uri, params = {}) {
	const url = getFullUrl(uri, params);
	return fetch(url);
};