import React from 'react';
import ReactDOM from 'react-dom';

import useScroll from 'scroll-behavior/lib/useStandardScroll';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = useScroll(createBrowserHistory)();

import { Provider } from 'react-redux';

import routes from './routes';

import createStore from './redux/createStore';

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>
	, document.getElementById('app'));