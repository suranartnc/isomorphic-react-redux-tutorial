const initialState = [];

export default function(state = initialState, action) {
	console.log(action.type);
	switch (action.type) {
		case 'GET_LATEST_ARTICLES':
			return action.res.items;
		default:
			return state;
	}
}