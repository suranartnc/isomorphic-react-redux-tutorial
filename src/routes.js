import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import ArticleDetail from './components/ArticleDetail';

export default (
	<Route path={`/`} component={App}>
		<IndexRoute component={Main} />
		<Route path={`questions/:question_id`} component={ArticleDetail} />
	</Route>
);