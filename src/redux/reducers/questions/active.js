import {

	GET_QUESTION_BY_ID,
	GET_QUESTION_BY_ID_SUCCESS,
	GET_QUESTION_BY_ID_FAILURE,

	GET_RELATED_QUESTIONS,
	GET_RELATED_QUESTIONS_SUCCESS,
	GET_RELATED_QUESTIONS_FAILURE

} from '../../actions/QuestionActions';

const initialData = {};
const initialRelated = [];

const initialState = {
	loading: false,
	loaded: false,
	error: null,
	data: initialData,
	related: initialRelated
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_QUESTION_BY_ID:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null,
				data: initialData,
				related: initialRelated
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
				data: initialData
			};

		case GET_RELATED_QUESTIONS_SUCCESS:
			return { 
				...state, 
				related: action.result.items
			};

		default:
			return state;
	}
};