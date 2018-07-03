import React, { Component } from 'react';
import PageSection from '../components/PageSection';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillData: [
        {
          head: 'Hi',
          desc: 'salesforce',
        },
        {
          head: 'Hi',
          desc: 'bootstrap',
        },
        {
          head: 'Hi',
          desc: 'sass',
        },
      ],
    };
  }
  componentDidMount() { }
  render() {
    const skillsList = this.state.skillData.map((skill, i) => (
      <div className="notification">
        Hello <strong>{skill.head}</strong>
        <h3>{skill.desc}</h3>
      </div>
    ));
    return (
      <PageSection>
        {skillsList}
      </PageSection>
    );
  }
}

export default Skills;
