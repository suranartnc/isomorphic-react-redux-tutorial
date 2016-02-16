import { createStore, applyMiddleware } from 'redux';

import clientMiddleware from './middlewares/clientMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';

import reducers from './reducers';

export default (initialState) => {
	return applyMiddleware(clientMiddleware, loggerMiddleware)(createStore)(reducers, initialState);
}