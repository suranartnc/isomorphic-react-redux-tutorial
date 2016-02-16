export default ({ getState }) => next => action => {
	// console.log('Will dispatch', action);
	// console.log('State before dispatch', getState());

	const result = next(action);

	// console.log('State after dispatch', getState());

	return result;
}