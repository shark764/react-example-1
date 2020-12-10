import React, { useState } from 'react';

function ConditionalRendering() {
  const [value, setValue] = useState('on');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="on"
            checked={value === 'on' || false}
            onChange={onChange}
          />
          On
        </label>

        <label>
          <input
            type="radio"
            value="off"
            checked={value === 'off' || false}
            onChange={onChange}
          />
          Off
        </label>
      </div>

      {value === 'on' && <div>Hello!, render this when true</div>}
      {value === 'off' && <div>Hello, value is false</div>}

      {value === 'on' ? <p>It's ON</p> : <p>It's OFF</p>}
    </div>
  );
}

export default ConditionalRendering;
