export function getLatestArticles() {
	return {
		type: 'GET_LATEST_ARTICLES'
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