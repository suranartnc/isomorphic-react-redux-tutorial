const initialState = [];

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_LATEST_ARTICLES':
		case 'GET_SEARCH_RESULTS':
			return action.res.items;
		default:
			return state;
	}
}