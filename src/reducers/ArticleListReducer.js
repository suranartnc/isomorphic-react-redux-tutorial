const initialState = [
	{
		question_id: 1,
		title: 'Title 1'
	}, {
		question_id: 2,
		title: 'Title 2'
	}, {
		question_id: 3,
		title: 'Title 3'
	}
];

export default function(state = initialState, action) {
	console.log(action.type);
	switch (action.type) {
		default:
			return state;
	}
}