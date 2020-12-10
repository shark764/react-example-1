import React, { useState } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';

function Examples() {
  const [sharedText, setSharedText] = useState('Hey share this text');

  return (
    <>
      <div
        className="App-shared"
        style={{
          margin: '5px 55px',
        }}
      >
        {sharedText}
        <input type="text" onChange={(e) => setSharedText(e.target.value)} />
      </div>

      <div className="examples">
        <Example1 shared={[sharedText, setSharedText]} />
        <Example2 shared={[sharedText, setSharedText]} />
      </div>
    </>
  );
}

export default Examples;
