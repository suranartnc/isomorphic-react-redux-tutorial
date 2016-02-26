import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
	App,
	Home,
	ArticleDetail
} from './react/containers';

export default (
	<Route path={`/`} component={App}>
		<IndexRoute component={Home} />
		<Route path={`article/:article_id`} component={ArticleDetail} />
	</Route>
);