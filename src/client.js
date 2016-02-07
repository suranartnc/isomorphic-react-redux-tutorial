import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory();

import App from './components/App';
import Main from './components/Main';
import ArticleDetail from './components/ArticleDetail';

ReactDOM.render(
	<Router history={history}>
		<Route path={`/`} component={App}>
			<IndexRoute component={Main} />
			<Route path={`questions/:question_id`} component={ArticleDetail} />
		</Route>
	</Router>
	, document.getElementById('app'));