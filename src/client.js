import React from 'react';
import ReactDOM from 'react-dom';

import useScroll from 'scroll-behavior/lib/useStandardScroll';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = useScroll(createBrowserHistory)();

import routes from './routes';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import promiseMiddleware from './redux/middlewares/promiseMiddleware';

const initialState = window.__INITIAL_STATE__;
const store = applyMiddleware(promiseMiddleware)(createStore)(reducers, initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>
	, document.getElementById('app'));