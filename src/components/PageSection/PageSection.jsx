import React from 'react';
import './PageSection.css';

const PageSection = props =>
  (
    <div className="container is-fluid" style={{ marginTop: 60 }} >
        {props.children}
    </div>
  );

export default PageSection;
