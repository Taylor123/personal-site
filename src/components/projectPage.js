"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');
const {Badge, Row, Col} = require('react-materialize');

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.params.id;
  }

  render() {
    let project = PROJECTS[this.id];
    return (
      <div>
        <Row className='center'>
          <h2>{project.name}</h2>
        </Row>
      
        <div className='section white'>
          <Row className='center'>
            {
              project.stack.map( (tech, key) => 
                <Col key={key} s={6} m={4} l={3}>
                  <Badge newIcon>{tech}</Badge>
                </Col>
              )
            }
          </Row>
        </div>
        <Row>
          <Link to="/">Home</Link>
        </Row>
      </div>
    );
  }
}

module.exports = ProjectPage;
