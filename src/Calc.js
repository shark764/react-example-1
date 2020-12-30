import React, { useState } from 'react';
// import ReactQueryExample from './Containers/ReactQueryExample';

function renderComp({ name }) {
  return (
    <div>
      I love ReactJs
      <p>
        Hello World, I&#39;m
        {name}
      </p>
    </div>
  );
}

function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const reset = () => {
    setNum1(0);
    setNum2(0);
  };

  const frenderComp = renderComp({ name: 'Hernandez' });

  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value, 10))}
      />
      <label style={{ color: 'blue', fontWeight: '900', fontSize: 36 }}>
        {num1 + num2}
      </label>

      <button type="button" onClick={reset} disabled={num1 === 0 && num2 === 0}>
        Reset
      </button>

      {renderComp({ name: 'Daniel' })}
      {frenderComp}

      {/* <ReactQueryExample /> */}
    </>
  );
}

export default Calc;
