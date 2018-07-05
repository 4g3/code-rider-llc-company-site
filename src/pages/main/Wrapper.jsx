import React from 'react';

const wrap = {
  minHeight: '100%',
  paddingBottom: '100px',
  marginTop: '50px',
};

const Wrapper = props => <main style={wrap} {...props} />;

export default Wrapper;
