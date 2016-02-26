import {
	GET_ARTICLES,
	GET_ARTICLES_SUCCESS,
	GET_ARTICLES_FAILURE,

	SEARCH_ARTICLES,
	SEARCH_ARTICLES_SUCCESS,
	SEARCH_ARTICLES_FAILURE
} from '../../actions/ArticleActions';

const initialData = [];

const initialState = {
	loading: false,
	loaded: false,
	error: null,
	data: initialData
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ARTICLES:
		case SEARCH_ARTICLES:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null,
				data: initialData
			};

		case GET_ARTICLES_SUCCESS:
		case SEARCH_ARTICLES_SUCCESS:
			return { 
				...state, 
				loading: false,
				loaded: true,
				error: null,
				data: action.result 
			};

		case GET_ARTICLES_FAILURE:
		case SEARCH_ARTICLES_FAILURE:
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