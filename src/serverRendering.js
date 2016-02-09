import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RoutingContext } from 'react-router'

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import promiseMiddleware from './middlewares/promiseMiddleware';
import routes from './routes';
import prefetchComponentData from './utils/prefetchComponentData';

export default function(req, res) {

  const store = applyMiddleware(promiseMiddleware)(createStore)(reducers);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      prefetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(renderHTML)
        .then((html) => res.status(200).send(html))
        .catch(err => res.end(err.message));
    } else {
      res.status(404).send('Not found')
    }

    function renderHTML() {

        const initialState = store.getState();

        const renderedComponent = ReactDOM.renderToString(
            <Provider store={store}>
              <RoutingContext {...renderProps} />
            </Provider>
        );

        const HTML = `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Isomorphic React Redux Tutorial</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
              </head>
              <body>
                <div id="app">${renderedComponent}</div>
                <script type="application/javascript">
                   window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                </script>
                <script src="/assets/bundle.js"></script>
              </body>
            </html>    
        `;

        return HTML;
    }
  })
};