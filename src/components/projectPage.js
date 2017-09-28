"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');
import {Parallax, Row, Col} from 'react-materialize';

class ProjectPage extends React.Component {
  render() {
    let project = PROJECTS[this.props.params.id];
    return (
      <div>
        <Row className='center'>
          <h2>{project.name}</h2>
        </Row>
        <Row className='center'>
          {
            project.stack.map( (tech, key) => 
              <Col key={key} s={6} m={4} l={3}>
                {tech}
              </Col>
            )
          }
        </Row>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

module.exports = ProjectPage;
