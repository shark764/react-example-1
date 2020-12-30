import React, { useState } from 'react';
import Digit from './Digit';
import Output from './Output';
import './dialpad.css';
import Caller from './Caller';

const digits = [
  { digit: 1 },
  { digit: 2, letters: ['A', 'B', 'C'] },
  { digit: 3, letters: ['D', 'E', 'F'] },
  { digit: 4, letters: ['G', 'H', 'I'] },
  { digit: 5, letters: ['J', 'K', 'L'] },
  { digit: 6, letters: ['M', 'N', 'O'] },
  { digit: 7, letters: ['P', 'Q', 'R', 'S'] },
  { digit: 8, letters: ['T', 'U', 'V'] },
  { digit: 9, letters: ['W', 'X', 'Y', 'Z'] },
  { digit: '*' },
  { digit: 0 },
  { digit: '#' },
];

function DialPad() {
  const [output, setOutput] = useState('');

  const dial = (digit) => {
    setOutput((prevOutput) => `${prevOutput}${digit}`);
  };

  const onDelete = () => {
    setOutput((prevOutput) => prevOutput.slice(0, -1));
  };

  return (
    <div>
      <h2>Thinking in React</h2>
      Please, dial a number
      <div className="dialpad-container">
        <Output output={output} />

        <div className="dialpad-rows">
          <div className="dialpad-row">
            {digits.map((digit) => (
              <Digit key={digit.digit.toString()} {...digit} onPress={dial} />
            ))}
          </div>

          <div className="dialpad-row dialpad-footer">
            <Digit digit="+" onPress={dial} />
            <Caller number={output} />
            <Digit onPress={onDelete}>
              <i className="fa fa-long-arrow-alt-left" aria-hidden="true" />
            </Digit>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialPad;
