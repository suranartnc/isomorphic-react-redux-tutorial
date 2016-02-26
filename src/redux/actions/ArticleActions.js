export const GET_ARTICLES = Symbol('get articles');
export const GET_ARTICLES_SUCCESS = Symbol('get articles success');
export const GET_ARTICLES_FAILURE = Symbol('get articles failure');

export const GET_ARTICLE_BY_ID = Symbol('get article by id');
export const GET_ARTICLE_BY_ID_SUCCESS = Symbol('get article by id success');
export const GET_ARTICLE_BY_ID_FAILURE = Symbol('get article by id failure');

export const SEARCH_ARTICLES = Symbol('search articles');
export const SEARCH_ARTICLES_SUCCESS = Symbol('search articles success');
export const SEARCH_ARTICLES_FAILURE = Symbol('search articles failure');

export const GET_RELATED_ARTICLES = Symbol('get related articles');
export const GET_RELATED_ARTICLES_SUCCESS = Symbol('get related articles success');
export const GET_RELATED_ARTICLES_FAILURE = Symbol('get related articles failure');

export function getArticles() {
	return {
		types: {
			request: GET_ARTICLES,
			success: GET_ARTICLES_SUCCESS,
			failure: GET_ARTICLES_FAILURE
		},

		promise: client => {
			return client.getArticles();
		}
	};
}

export function getArticleById(id) {
	return {
		types: {
			request: GET_ARTICLE_BY_ID,
			success: GET_ARTICLE_BY_ID_SUCCESS,
			failure: GET_ARTICLE_BY_ID_FAILURE
		},

		promise: client => {
			return client.getArticle(id);
		}
	};
}

export function searchArticles(keyword = '', excludedId = null) {
	return {
		types: {
			request: SEARCH_ARTICLES,
			success: SEARCH_ARTICLES_SUCCESS,
			failure: SEARCH_ARTICLES_FAILURE
		},

		promise: client => {
			return client.searchArticles(keyword, excludedId);
		}
	};
}

export function getArticleContentById(article_id) {
	return {
		...getArticleById(article_id),

		onPromiseResolve: result => {
			return getRelatedArticles(result.tags[0], article_id);
		}
	}
}

export function getRelatedArticles(tag = '', excludedId = null) {
	return {
		...searchArticles(tag, excludedId),
		
		types: {
			request: GET_RELATED_ARTICLES,
			success: GET_RELATED_ARTICLES_SUCCESS,
			failure: GET_RELATED_ARTICLES_FAILURE
		},
	}
}