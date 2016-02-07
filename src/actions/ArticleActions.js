import { getFetchPromise, api } from '../utils/fetchData';

export function getLatestArticles() {
	return {
		type: 'GET_LATEST_ARTICLES',
		promise: getFetchPromise(`${api.stackExchange}questions?order=desc&sort=activity&site=stackoverflow`)
	}
}

export function getSearchResults() {
	return {
		type: 'GET_SEARCH_RESULTS'
	}
}

export function getArticleById(id) {
	return {
		type: 'GET_ARTICLE_BY_ID'
	}
}