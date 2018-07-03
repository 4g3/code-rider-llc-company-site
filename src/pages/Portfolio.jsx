import React, { Component } from 'react';
import PageSection from '../components/PageSection';
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
      <PageSection>
        {projectsList}
      </PageSection>
    );
  }
}

export default Portfolio;
