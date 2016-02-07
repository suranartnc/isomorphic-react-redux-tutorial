import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
const history = createBrowserHistory();

import routes from './routes';

ReactDOM.render(<Router children={routes} history={history} />, document.getElementById('app'));