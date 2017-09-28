"use strict";

const React = require('react');
const Link = require('react-router').Link;

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>404 Page not found</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

module.exports = NotFound;
