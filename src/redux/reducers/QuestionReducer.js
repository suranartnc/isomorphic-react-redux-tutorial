import {
	GET_QUESTIONS,
	GET_QUESTIONS_SUCCESS,
	GET_QUESTIONS_FAILURE,

	GET_QUESTION_BY_ID,
	GET_QUESTION_BY_ID_SUCCESS,
	GET_QUESTION_BY_ID_FAILURE,

	SEARCH_QUESTIONS,
	SEARCH_QUESTIONS_SUCCESS,
	SEARCH_QUESTIONS_FAILURE
} from '../actions/QuestionActions';

const initialState = {
	list: {
		loading: false,
		loaded: false,
		error: null,
		items: []
	},
	active: {
		loading: false,
		loaded: false,
		error: null,
		data: {}
	}
};

function list(state = initialState.list, action) {
	switch (action.type) {
		case GET_QUESTIONS:
		case SEARCH_QUESTIONS:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null
			};

		case GET_QUESTIONS_SUCCESS:
		case SEARCH_QUESTIONS_SUCCESS:
			return { 
				...state, 
				loading: false,
				loaded: true,
				error: null,
				items: action.result.items 
			};

		case GET_QUESTIONS_FAILURE:
		case SEARCH_QUESTIONS_FAILURE:
			return { 
				...state, 
				loading: false, 
				loaded: true,
				error: action.error
			};

		default:
			return state;
	}
}

function active(state = initialState.active, action) {
	switch (action.type) {
		case GET_QUESTION_BY_ID:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null
			};

		case GET_QUESTION_BY_ID_SUCCESS:
			return { 
				...state, 
				loading: false,
				loaded: true,
				error: null,
				data: action.result.items[0]
			};

		case GET_QUESTION_BY_ID_FAILURE:
			return { 
				...state,
				loading: false,
				loaded: true,
				error: action.error,
				data: {}
			};

		default:
			return state;
	}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_QUESTIONS:
		case GET_QUESTIONS_SUCCESS:
		case GET_QUESTIONS_FAILURE:
		case SEARCH_QUESTIONS:
		case SEARCH_QUESTIONS_SUCCESS:
		case SEARCH_QUESTIONS_FAILURE:
			return { ...state, list: list(state.questions, action) };

		case GET_QUESTION_BY_ID:
		case GET_QUESTION_BY_ID_SUCCESS:
		case GET_QUESTION_BY_ID_FAILURE:
			return { ...state, active: active(state.question, action) };

		default:
			return state;
	}
}