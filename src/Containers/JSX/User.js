import React from 'react';

function User({ value }) {
  return (
    <div className="App-user">
      <img src={value.picture} alt="user pic" title={value.name} width={32} />
      <span>{value.name}</span>
      <span>
        $
        {value.balance}
      </span>
      <span>{value.email}</span>
    </div>
  );
}

export default User;
