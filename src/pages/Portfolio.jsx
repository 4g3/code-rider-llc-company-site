import React, { Component } from 'react';
import PageSection from '../components/PageSection';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [
        {
          name: 'USDA',
          description: 'Hello',
          githubLink: 'https://www.github.com',
          liveLink: '',
        },
        {
          name: 'GSA',
          description: 'Hello',
          githubLink: '',
          liveLink: 'https://www.google.com',
        },
        {
          name: 'SNIMBUS',
          description: 'Hello',
          githubLink: 'https://www.google.com',
          liveLink: 'https://www.google.com',
        },
        {
          name: 'Capital One',
          description: 'Hello',
          githubLink: '',
          liveLink: '',
        },
      ],
    };
  }
  componentDidMount() { }
  render() {
    const projectsList = this.state.projectData.map((project, i) => (
      <div className="notification">
        <div className="card">
          <div className="card-content">
            <p className="title">
              {project.name}
            </p>
            <p className="subtitle">
              {project.description}
            </p>
          </div>
          {
            project.githubLink !== '' || project.liveLink !== '' ?
              <footer className="card-footer">
                {project.githubLink !== '' ?
                  <p className="card-footer-item">
                    <span><a href={project.githubLink} target="_blank">View it on Github</a> </span>
                  </p>
                : ''
                }
                {project.liveLink !== '' ?
                  <p className="card-footer-item">
                    <span><a href={project.liveLink} target="_blank">View it live</a> </span>
                  </p>
                : ''
                }
              </footer>
              : ''
          }
        </div>
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
