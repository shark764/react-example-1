import React from 'react';

function Digit({ digit, letters = [], onPress, children }) {
  return (
    <div className="dialpad-digit" onClick={() => onPress(digit)}>
      {digit && <span>{digit}</span>}

      {letters.length > 0 && (
        <div className="dialpad-digit-letters">{letters.join('')}</div>
      )}

      {children}
    </div>
  );
}

export default Digit;
