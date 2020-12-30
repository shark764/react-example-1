import React from 'react';
import PropTypes from 'prop-types';

function Digit({
  digit, letters = [], onPress, children,
}) {
  return (
    <div
      className="dialpad-digit"
      onClick={() => onPress(digit)}
      role="button"
      tabIndex={0}
    >
      {digit && <span>{digit}</span>}

      {letters.length > 0 && (
        <div className="dialpad-digit-letters">{letters.join('')}</div>
      )}

      {children}
    </div>
  );
}
Digit.propTypes = {
  digit: PropTypes.number,
  letters: PropTypes.shape([]),
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
Digit.defaultProps = {
  letters: [],
};

export default Digit;
