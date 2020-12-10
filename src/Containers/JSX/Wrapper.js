import React from 'react';

function Wrapper(props) {
  console.log(props);

  return (
    <div
      style={{
        border: '1px solid darkcyan',
        padding: 15,
        marginBottom: 15,
        ...props.style,
      }}
    >
      Hello my friend!!
      <p>Look a list of my children</p>
      {props.children}
    </div>
  );
}

export default Wrapper;
