import React, { useState } from 'react';

function Caller({ number }) {
  const [calling, setCalling] = useState(false);

  return (
    <div
      className={calling ? 'dialpad-calling' : 'dialpad-caller'}
      onClick={() => setCalling((isCalling) => !isCalling)}
    >
      <i
        className={`fa ${calling ? 'fa-phone-slash' : 'fa-phone'}`}
        aria-hidden="true"
      ></i>
    </div>
  );
}

export default Caller;
