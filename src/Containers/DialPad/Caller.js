import React, { useState } from 'react';

function Caller() {
  const [calling, setCalling] = useState(false);

  return (
    <div
      className={calling ? 'dialpad-calling' : 'dialpad-caller'}
      onClick={() => setCalling((isCalling) => !isCalling)}
      role="button"
      tabIndex={0}
    >
      <i
        className={`fa ${calling ? 'fa-phone-slash' : 'fa-phone'}`}
        aria-hidden="true"
      />
    </div>
  );
}

export default Caller;
