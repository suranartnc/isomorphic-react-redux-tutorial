import {

	GET_QUESTION_BY_ID,
	GET_QUESTION_BY_ID_SUCCESS,
	GET_QUESTION_BY_ID_FAILURE,

} from '../../actions/QuestionActions';

const initialData = {};

const initialState = {
	loading: false,
	loaded: false,
	error: null,
	data: initialData
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_QUESTION_BY_ID:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null,
				data: initialData
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

		default:
			return state;
	}
};