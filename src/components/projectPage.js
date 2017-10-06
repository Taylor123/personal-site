"use strict";

const React = require('react');
const Link = require('react-router').Link;
const PROJECTS = require('../projects');
const {Navbar, NavItem, Card, Button, Row, Col} = require('react-materialize');

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
        <Navbar 
        className='blue-grey lighten-1' 
        brand='Taylor Johnson'
        right>
          <NavItem href='/'>Home</NavItem>
        </Navbar>
        <Row>
            <h1 className='center white-text title'>{project.name}</h1>
        </Row>
        <Row>
          <div className='valign-wrapper'>
            <Col s={12} m={7}>
              <Card
                className='hoverable'>
                <h5>{project.shortDescription}</h5>
                <p className='flow-text'>{project.description}</p>
              </Card>  
            </Col>

            <Col s={12} m={5} className='hide-on-small-only'>
              <img className='responsive-img' src={project.imageUri} />
            </Col>
          </div>
        </Row>
        <div className='section brown lighten-4'>
          <Row>
            <Col s={12}>
              <h5>Stack</h5>
            </Col>
            {
              project.stack.map( (tech, key) => 
                <Col className='col-separate' key={key} s={6} m={4} l={3}>
                  <Button className='stack-btn blue-grey lighten-1 white-text' waves='light'>{tech}</Button>
                </Col>
              )
            }
          </Row>
        </div>

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
