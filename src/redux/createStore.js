import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import clientMiddleware from './middlewares/clientMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';

import reducers from './reducers';

export default (initialState) => {
	const middlewares = [
		thunk,
		clientMiddleware,
		loggerMiddleware
	];

	return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
}