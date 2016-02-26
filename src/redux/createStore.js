import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import {
	promiseResolverMiddleware,
	loggerMiddleware
} from './middlewares';

import reducers from './reducers';

export default (initialState) => {
	const middlewares = [
		thunk,
		promiseResolverMiddleware,
		loggerMiddleware
	];

	return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
}