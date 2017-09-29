"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');
const {Card, Button, Row, Col} = require('react-materialize');

const colSeparation = {
  marginTop: '3%'
}
const stackStyle = {
  width: '80%'
}

// TODO clean up UI of stack
// TODO Add other media, so more images and/or video
// TODO make image section mobile responsive (it happens because of the valign-wrapper)

// could change stack buttons to chips

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.params.id;
  }

  render() {
    let project = PROJECTS[this.id];
    return (
      <div>
        <Row className='left-align'>
          <Col>
            <Link to='/'><h4>Taylor Johnson</h4></Link>
          </Col>
        </Row>
        <Row>
          <div className='valign-wrapper'>
            <Col s={12} m={7}>
              <Card
                className='hoverable'
                title={project.name}>
                <h5>{project.shortDescription}</h5>
                <p className='flow-text'>{project.description}</p>
              </Card>  
            </Col>

            <Col s={12} m={5}>
              <p className='center'>responsive image of site on comp</p>
            </Col>
          </div>
        </Row>
      
        <Row className='center'>
          {
            project.stack.map( (tech, key) => 
              <Col style={colSeparation} key={key} s={6} m={4} l={3}>
                <Button style={stackStyle} waves='light'>{tech}</Button>
              </Col>
            )
          }
        </Row>

        <Row className='white-text'>
          <Col s={12}>
            <h5>Contributions</h5>
            <Row>
            {
              project.contributions.map( (item, key) => 

                <Col s={6}>
                  <hr></hr>
                  <p className='flow-text'>{item}</p>
                </Col>
              )
            }
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

module.exports = ProjectPage;
