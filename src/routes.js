import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './react/containers/App';
import Home from './react/containers/Home';
import QuestionDetail from './react/containers/QuestionDetail';
// import ArticleDetail from './react/containers/ArticleDetail';

export default (
	<Route path={`/`} component={App}>
		<IndexRoute component={Home} />
		<Route path={`questions/:question_id`} component={QuestionDetail} />
	</Route>
);