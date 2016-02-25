export const GET_QUESTIONS = Symbol('get questions');
export const GET_QUESTIONS_SUCCESS = Symbol('get questions success');
export const GET_QUESTIONS_FAILURE = Symbol('get questions failure');

export const GET_QUESTION_BY_ID = Symbol('get question by id');
export const GET_QUESTION_BY_ID_SUCCESS = Symbol('get question by id success');
export const GET_QUESTION_BY_ID_FAILURE = Symbol('get question by id failure');

export const SEARCH_QUESTIONS = Symbol('search questions');
export const SEARCH_QUESTIONS_SUCCESS = Symbol('search questions success');
export const SEARCH_QUESTIONS_FAILURE = Symbol('search questions failure');

export const GET_RELATED_QUESTIONS = Symbol('get related questions');
export const GET_RELATED_QUESTIONS_SUCCESS = Symbol('get related questions success');
export const GET_RELATED_QUESTIONS_FAILURE = Symbol('get related questions failure');

export function getQuestions() {
	return {
		types: {
			request: GET_QUESTIONS,
			success: GET_QUESTIONS_SUCCESS,
			failure: GET_QUESTIONS_FAILURE
		},

		promise: client => {
			return client.findQuestions();
		}
	};
}

export function getQuestionById(question_id) {
	return {
		types: {
			request: GET_QUESTION_BY_ID,
			success: GET_QUESTION_BY_ID_SUCCESS,
			failure: GET_QUESTION_BY_ID_FAILURE
		},

		promise: client => {
			return client.findQuestion(question_id);
		}
	};
}

export function searchQuestions(keyword = '') {
	return {
		types: {
			request: SEARCH_QUESTIONS,
			success: SEARCH_QUESTIONS_SUCCESS,
			failure: SEARCH_QUESTIONS_FAILURE
		},

		promise: client => {
			return client.searchQuestions(keyword);
		}
	};
}

export function getQuestionContentById(question_id) {
	return {
		...getQuestionById(question_id),

		onPromiseResolve: result => {
			return getRelatedQuestions(result.tags[0]);
		}
	}
}

export function getRelatedQuestions(tag = '') {
	return {
		...searchQuestions(tag),
		
		types: {
			request: GET_RELATED_QUESTIONS,
			success: GET_RELATED_QUESTIONS_SUCCESS,
			failure: GET_RELATED_QUESTIONS_FAILURE
		},
	}
}