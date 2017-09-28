"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');
import {Row, Col} from 'react-materialize';

class Index extends React.Component {
  render() {
    return (
      <div>
      <Row className='center'>
        <h1>Taylor Johnson</h1>
      </Row> 
      {
          Object.keys(PROJECTS).map(id =>
            <Row className='center'>
              <div key={id}><Link to={`/project/${id}`}>{PROJECTS[id].name}</Link></div>
            </Row>
          )
      }
      </div>
    )
  }
}

module.exports = Index;
