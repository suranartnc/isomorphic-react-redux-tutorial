import {
	GET_QUESTIONS,
	GET_QUESTIONS_SUCCESS,
	GET_QUESTIONS_FAILURE,

	SEARCH_QUESTIONS,
	SEARCH_QUESTIONS_SUCCESS,
	SEARCH_QUESTIONS_FAILURE
} from '../../actions/QuestionActions';

const initialData = [];

const initialState = {
	loading: false,
	loaded: false,
	error: null,
	data: initialData
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_QUESTIONS:
		case SEARCH_QUESTIONS:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null,
				data: initialData
			};

		case GET_QUESTIONS_SUCCESS:
		case SEARCH_QUESTIONS_SUCCESS:
			return { 
				...state, 
				loading: false,
				loaded: true,
				error: null,
				data: action.result 
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