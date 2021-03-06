'use strict';

const Express = require('express');
const React = require('react');
const ReactDom = require('react-dom/server');
const Router = require('react-router');
const routesConfig = require('./src/routesConfig');
const port = process.env.PORT || 8080;

const app = Express();

app.use('/dist', Express.static('dist'));
app.set('view engine', 'ejs');

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

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.info('Server running...');
});