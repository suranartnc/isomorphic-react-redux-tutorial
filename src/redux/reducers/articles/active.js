import {
	GET_ARTICLE_BY_ID,
	GET_ARTICLE_BY_ID_SUCCESS,
	GET_ARTICLE_BY_ID_FAILURE,

	GET_RELATED_ARTICLES,
	GET_RELATED_ARTICLES_SUCCESS,
	GET_RELATED_ARTICLES_FAILURE

} from '../../actions/ArticleActions';

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
		case GET_ARTICLE_BY_ID:
			return { 
				...state, 
				loading: true, 
				loaded: false,
				error: null,
				data: initialData,
				related: initialRelated
			};

		case GET_ARTICLE_BY_ID_SUCCESS:
			return { 
				...state, 
				loading: false,
				loaded: true,
				error: null,
				data: action.result
			};

		case GET_ARTICLE_BY_ID_FAILURE:
			return { 
				...state,
				loading: false,
				loaded: true,
				error: action.error,
				data: initialData
			};

		case GET_RELATED_ARTICLES_SUCCESS:
			return { 
				...state, 
				related: action.result
			};

		default:
			return state;
	}
};