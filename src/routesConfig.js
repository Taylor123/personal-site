"use strict";

const Index = require('./components/Index');
const ProjectPage = require('./components/projectPage');
const NotFound = require('./components/notFound');

const routesConfig = [
  {path: '/', component: Index},
  {path: '/project/:id', component: ProjectPage},
  {path: '*', component: NotFound}
];

module.exports = routesConfig;
