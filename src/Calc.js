import React, { useState } from 'react';

function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const reset = function (e) {
    setNum1(0);
    setNum2(0);
  };

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
    </>
  );
}

export default Calc;
