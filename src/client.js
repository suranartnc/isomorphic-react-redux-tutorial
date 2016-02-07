import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory();

import routes from './routes';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import promiseMiddleware from './middlewares/promiseMiddleware';

const store = applyMiddleware(promiseMiddleware)(createStore)(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>
	, document.getElementById('app'));