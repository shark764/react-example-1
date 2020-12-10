import React from 'react';

function Child({ value, onRemove }) {
  return (
    <div
      style={{
        border: '1px solid darksalmon',
        padding: 15,
        margin: 15,
        borderRadius: 8,
      }}
    >
      Child number {value}!
      <button type="button" onClick={(e) => onRemove(value)}>
        X
      </button>
    </div>
  );
}

export default Child;
