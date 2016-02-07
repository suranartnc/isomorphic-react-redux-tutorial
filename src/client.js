import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';

ReactDOM.render(
	<Router>
		<Route path={`/`} component={App}>
			<IndexRoute component={Main} />
		</Route>
	</Router>
	, document.getElementById('app'));