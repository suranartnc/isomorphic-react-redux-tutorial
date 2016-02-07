import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';

export default (
	<Route path={`/`} component={App}>
		<IndexRoute component={Home} />
		<Route path={`questions/:question_id`} component={ArticleDetail} />
	</Route>
);