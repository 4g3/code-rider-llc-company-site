import React, { Component } from 'react';
import PageSection from '../components/PageSection';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [
        {
          name: 'Digital Services Center (DSC)',
          description: 'Helped with the Digital Transformation of Salesforce.com at the USDA at the Office of the Chief Information Officer Enterprise Applications Services (EAS). Providing architectural oversight, consulted teams on best practices and provided development services for more than 10 salesforce.com org’s with 50k+ total users using 20+ applications. ',
          githubLink: '',
          liveLink: '',
          learnLink: 'https://www.ocio.usda.gov/about-ocio/enterprise-applications-services-eas',
        },
        {
          name: 'Compliance Seal',
          description: 'Worked with S Nimbus LLC to help develop Compliance Seal, a leading Governance, Risk and Compliance (GRC) application which runs on Salesforce.com and helps to automate security across the enterprise.',
          githubLink: '',
          liveLink: 'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EORjgUAH',
          learnLink: 'https://complianceseal.com/',
        },
        {
          name: 'Open GSA Search Feature',
          description: 'Helped to implement a search feature on the Open GSA website using Lunr.js and Jekyll',
          githubLink: '',
          liveLink: 'https://open.gsa.gov/',
          learnLink: 'https://www.youtube.com/watch?v=cQyDMejvojY&feature=youtu.be',
        },
        {
          name: 'Hews',
          description: 'Hacker News reader built in React Native and hosted on App Store and Play Store',
          githubLink: 'https://github.com/code-rider-llc/hews',
          liveLink: '',
          learnLink: '',
        },
        {
          name: 'Sandbox Commander',
          description: 'Enterprise Grade Sandbox Management Application coming to the Salesforce AppExchange soon',
          githubLink: '',
          liveLink: '',
          learnLink: '',
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
            <p className="title" style={{ paddingBottom: '20px' }}>
              {project.name}
            </p>
            <p className="subtitle" style={{ paddingBottom: '10px' }}>
              {project.description}
            </p>
          </div>
          {
            project.githubLink !== '' || project.liveLink !== '' || project.learnLink !== '' ?
              <footer className="card-footer">
                {project.githubLink !== '' ?
                  <p className="card-footer-item">
                    <span><a href={project.githubLink} target="_blank">View it on Github</a> </span>
                  </p>
                  : ''
                }
                {project.liveLink !== '' ?
                  <p className="card-footer-item">
                    <span><a href={project.liveLink} target="_blank">Try it</a> </span>
                  </p>
                  : ''
                }
                {project.learnLink !== '' ?
                  <p className="card-footer-item">
                    <span><a href={project.learnLink} target="_blank">Learn More</a> </span>
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
