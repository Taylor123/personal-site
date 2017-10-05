"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Routes = require('./routes');

window.onload = () => {
  ReactDOM.render(<Routes onUpdate={() => window.scrollTo(0, 0)} />, document.getElementById('main'))
};
