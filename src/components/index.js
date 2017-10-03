"use strict";

const React = require('react');
const Link = require('react-router').Link;
const ProjectCard = require('./projectCard');
const PROJECTS = require('../projects');
const {Parallax, Card, Row, Col} = require('react-materialize');

// TODO fix key warning by assigning keys where necessary


class Index extends React.Component {
  render() {
    return (
      <div>
        <Row className='center'>
          <h1 className='white-text title'>Taylor Johnson</h1>
        </Row>
        <Parallax className='parallax-width' imageSrc='/dist/images/solo-surfer.jpg' />

        <div className='section white-text'>
          <Row>
            <Col s={12} m={6} offset='m3'>
              <h4 className='center'>About</h4>
              <p>
                Taylor Johnson is a technologist, entrepreneur, surfer, and fitness enthusiast.
                <br/><br/>
                He received a Bachelors of Science degree in Electrical Engineering and a minor in 
                Technology Entrepreneurship. He is very passionate about entrepreneurship and continually 
                looks towards ways to help others with their ventures.
                <br/><br/>
                His current interests are in crypto assets, aka cryptocurrencies, and the underlying blockchain 
                technology. Blockchain has the potential to change the way we interact with peers over the internet 
                and will be a catalyst for industry disruption.
                <br/><br/>
                He previously founded VentureStorm, a web platform designed to connect entrepreneurs and startups 
                to talented software developers. Taylor and his team recognized the disconnect between the 
                entrepreneurial and developer communities on campus as an opportunity. As VentureStorm began 
                by connecting collegiate entrepreneurs to collegiate developers, the need for the platform outside 
                of the college market pushed the team to open it up. VentureStorm became an active community of 
                thousands of software developers interacting with entrepreneurs.
                <br/><br/>
                His work has been featured in publications such as the Washington Post and Huffington Post.
              </p>
              <div className='center'>
                <a className='social-link' href='https://www.facebook.com/taylor.johnson.90226' target='_blank'>
                  <i className='fa fa-facebook-square fa-3x white-text' aria-hidden='true'></i>
                </a>
                <a className='social-link' href='https://www.linkedin.com/in/taylor-johnson-8921a5a1/' target='_blank'>
                  <i className='fa fa-linkedin-square fa-3x white-text' aria-hidden='true'></i>
                </a>
                <a className='social-link' href='https://github.com/Taylor123' target='_blank'>
                  <i className='fa fa-github-square fa-3x white-text' aria-hidden='true'></i>
                </a>
              </div>
            </Col>
          </Row>
        </div>

        <div className='section brown lighten-4'>
          <Row>
            <h4 className='center'>Stuff I've Built</h4>
            {
              Object.keys(PROJECTS).map( (id, key) =>
                <Col s={12} m={6} key={key}>
                  <ProjectCard 
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
