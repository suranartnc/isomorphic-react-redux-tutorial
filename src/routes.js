import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
	App,
	Home,
	QuestionDetail
} from './react/containers';

export default (
	<Route path={`/`} component={App}>
		<IndexRoute component={Home} />
		<Route path={`questions/:question_id`} component={QuestionDetail} />
	</Route>
);