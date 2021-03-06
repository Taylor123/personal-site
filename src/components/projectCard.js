'use strict';

const React = require('react');
const Link = require('react-router').Link;
const {Card, CardTitle} = require('react-materialize');

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.name = props.name
    this.imageUri = props.imageUri;
    this.description = props.description;
  }

  render() {
    return (
      <Card
      header={<CardTitle image={this.imageUri} waves='light'></CardTitle>}
      title={this.name}
      actions={[<Link key={this.id} to={`/project/${this.id}`}>Learn More</Link>]}>
        <p>{this.description}</p>
      </Card>
    );
  }
}

module.exports = ProjectCard;