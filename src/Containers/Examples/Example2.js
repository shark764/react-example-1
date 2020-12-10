import React, { useState } from 'react';

function Example2(props) {
  const [number, setNumber] = useState(1000);
  const [label, setLabel] = useState('hello world');
  // console.log(props);
  const [sharedText, setSharedText] = props.shared;

  return (
    <div className="example">
      Hey look! I'm a functional component
      <br />
      <span style={{ color: 'salmon', fontWeight: 900 }}>
        I can have state too!!!!
      </span>
      <br />
      <span>{number * 10}</span>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <br />
      {/* String.prototype.replaceAll() is not supported by all browsers */}
      {label.toUpperCase().replace(/A/g, '*')}
      <input
        type="text"
        onChange={(e) => setLabel(e.target.value)}
        value={label}
      />
      <div className="App-shared">
        {sharedText}
        <input type="text" onChange={(e) => setSharedText(e.target.value)} />
      </div>
    </div>
  );
}

export default Example2;
