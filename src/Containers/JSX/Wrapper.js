import React from 'react';

function Wrapper({ style, children }) {
  return (
    <div
      style={{
        border: '1px solid darkcyan',
        padding: 15,
        marginBottom: 15,
        ...style,
      }}
    >
      Hello my friend!!
      <p>Look a list of my children</p>
      {children}
    </div>
  );
}

export default Wrapper;
