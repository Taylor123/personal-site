"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');
const {Parallax, Card, Row, Col} = require('react-materialize');

const paraStyle = {
    maxWidth: '100%'
};



class Index extends React.Component {
  render() {
    return (
      <div>
        <Row className='center'>
          <h1>Taylor Johnson</h1>
        </Row>
        <Parallax style={paraStyle} imageSrc='/dist/images/solo-surfer.jpg' />

        <div className='section white'>
          <Row>
            <Col s={12} m={8} offset='m2'>
              <Card className='small hoverable' 
              title='About'
              actions={[
                <a href='https://www.linkedin.com/in/taylor-johnson-8921a5a1/' target='_blank'>LinkedIn</a>,
                <a href='https://www.facebook.com/taylor.johnson.90226' target='_blank'>Facebook</a>
              ]}>
                <p className='center'>Taylor Johnson is a technologist, entrepreneur, surfer, and fitness enthusiast.</p>
              </Card>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <h5 className='center'>Stuff I've Built</h5>
            <Col s={12} m={8} offset='m2'>
              {
                Object.keys(PROJECTS).map(id =>
                  <Row className='center'>
                    <div key={id}><Link to={`/project/${id}`}>{PROJECTS[id].name}</Link></div>
                  </Row>
                )
              }
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

module.exports = Index;
