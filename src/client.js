import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import ArticleDetail from './components/ArticleDetail';

ReactDOM.render(
	<Router>
		<Route path={`/`} component={App}>
			<IndexRoute component={Main} />
			<Route path={`questions/:question_id`} component={ArticleDetail} />
		</Route>
	</Router>
	, document.getElementById('app'));