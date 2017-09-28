"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');

class ProjectPage extends React.Component {
  render() {
    let project = PROJECTS[this.props.params.id];
    return (
      <div>
        <h2>{project.name}</h2>
        <ul>{
          project.stack.map( (tech, key) =>
            <li key={key}>{tech}</li>
          )
        }</ul>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

module.exports = ProjectPage;
