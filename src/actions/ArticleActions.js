import { getFetchPromise, api } from '../utils/fetchData';

export function getLatestArticles() {
	return {
		type: 'GET_LATEST_ARTICLES',
		promise: getFetchPromise(`${api.stackExchange}questions?order=desc&sort=activity&site=stackoverflow`)
	}
}

export function getSearchResults(keyword) {
	return {
		type: 'GET_SEARCH_RESULTS',
		promise: getFetchPromise(`${api.stackExchange}search/advanced?order=desc&sort=activity&site=stackoverflow&q=${keyword}`)

	}
}

export function getArticleById(id) {
	return {
		type: 'GET_ARTICLE_BY_ID',
		promise: getFetchPromise(`${api.stackExchange}questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`)
	}
}