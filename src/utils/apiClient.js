import { get, getFullUrl, buildQueryString } from './apiHelper'

export default class ApiClient {

	getArticles() {
		return get('/articles', {
			_sort: 'id',
			_order: 'DESC',
			_limit: '20'
		});
	}

	searchArticles(keyword) {
		return get('/articles', {
			q: keyword,
			_sort: 'id',
			_order: 'DESC',
			_limit: '20'
		});
	}

	getArticle(id) {
		return get(`/articles/${id}`);
	}
}