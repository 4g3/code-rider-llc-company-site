import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillData: [
        [
          {
            src: 'salesforce.png',
            alt: 'salesforce',
          },
          {
            src: 'bootstrap.png',
            alt: 'bootstrap',
          },
          {
            src: 'sass.png',
            alt: 'sass',
          },
        ],
        [
          {
            src: 'jquery.png',
            alt: 'jquery',
          },
          {
            src: 'octocat.png',
            alt: 'github',
          },
          {
            src: 'vue-logo.png',
            alt: 'Vue',
          },
        ],
      ],
    };
  }
  componentDidMount() { }
  render() {
    const skillsList = this.state.skillData.map((arr, i) => (
      <div className="columns is-mobile">
        {arr.map((s, i) => (
          <div className="column" >
            <img src={`images/experience/${s.src}`} alt={s.alt} key={s.alt} />
          </div >
        ))}
      </div>
    ));
    return (
      <div className="container" style={{ marginTop: 30 }}>
        {skillsList}
      </div>
    );
  }
}

export default Skills;
