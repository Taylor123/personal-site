'use strict';

const Express = require('express');
const React = require('react');
const ReactDom = require('react-dom/server');
const Router = require('react-router');
const routesConfig = require('./src/routesConfig');

const app = Express();

app.set('view engine', 'ejs');
app.use('/dist', Express.static('dist'));

app.get('*', (req, res) => {
  Router.match({routes: routesConfig, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const markup = ReactDom.renderToString(<Router.RouterContext {...renderProps} />);
      res.render('index', {markup});
    } else {
      res.status(404).send('Not found')
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.info('Server running on http://localhost:3000');
});