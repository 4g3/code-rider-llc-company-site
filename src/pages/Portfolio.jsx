import React, { Component } from 'react';

class Portfolio extends Component {
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
          <div>
            <div className="column" >
              Project
            </div>
            <div className="modal">
              <div className="modal-background" />
              <div className="modal-content">
                Hello
              </div>
              <button className="modal-close is-large" aria-label="close" />
            </div>
          </div>
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

export default Portfolio;
