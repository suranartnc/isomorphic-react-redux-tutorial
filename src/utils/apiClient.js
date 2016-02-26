import { get, getFullUrl, buildQueryString } from './apiHelper'

export default class ApiClient {

	getArticles() {
		return get('/articles', {
			_sort: 'id',
			_order: 'DESC',
			_limit: '20'
		});
	}

	searchArticles(keyword, excludedId = null) {
		let params = {
			q: keyword,
			_sort: 'id',
			_order: 'DESC',
			_limit: '20'
		};

		if (excludedId) {
			params.id_ne = excludedId;
		}
		
		return get('/articles', params);
	}

	getArticle(id) {
		return get(`/articles/${id}`);
	}
}