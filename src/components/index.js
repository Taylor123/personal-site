"use strict";

const React = require('react');
const Link = require('react-router').Link;
const ProjectCard = require('./projectCard');
const PROJECTS = require('../projects');
const {Parallax, Card, Row, Col} = require('react-materialize');

const paraStyle = {
    maxWidth: '100%'
};
// TODO fix key warning by assigning keys where necessary


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
            {
              Object.keys(PROJECTS).map( (id, key) =>
                <Col s={12} m={6}>
                  <ProjectCard 
                  key={key}
                  id={id} 
                  name={PROJECTS[id].name} 
                  imageUri={PROJECTS[id].imageUri}
                  description={PROJECTS[id].shortDescription}>
                  </ProjectCard>
                </Col>
              )
            }
          </Row>
        </div>
      </div>
    )
  }
}

module.exports = Index;
