const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_ARTICLE_BY_ID':
			return action.res.items[0];
		default:
			return state;
	}
}