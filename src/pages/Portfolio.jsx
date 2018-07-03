import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [
        {
          name: 'USDA',
        },
        {
          name: 'GSA',
        },
        {
          name: 'SNIMBUS',
        },
        {
          name: 'Capital One',
        },
      ],
    };
  }
  componentDidMount() { }
  render() {
    const projectsList = this.state.projectData.map((project, i) => (
      <div className="notification">
        Hello <strong>{project.name}</strong>
      </div>
    ));
    return (
      <div className="container is-fluid" style={{ marginTop: 60 }}>
        {projectsList}
      </div>
    );
  }
}

export default Portfolio;
