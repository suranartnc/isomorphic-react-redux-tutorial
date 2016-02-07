require('es6-promise').polyfill();
require('isomorphic-fetch');

export const api =  {
	'stackExchange': 'https://api.stackexchange.com/2.2/'
};

export default function (url, callback) {
	fetch(url)
	  	.then(response => {
	    	if (response.status >= 400) {
	      		throw new Error("Bad response from server");
	    	}
	    	return response.json();
	  	})
	  	.then(data => {
	    	callback(data);
	  	});
}

export function getFetchPromise(url) {
	return fetch(url);
}