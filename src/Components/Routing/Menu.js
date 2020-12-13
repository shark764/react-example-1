import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="App-menu">
      <ul>
        <li>
          <Link to="/">Math</Link>
        </li>
        <li>
          <Link to="/samples">Components</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/dial">Dialpad</Link>
        </li>
        <li>
          <Link to="/api">API Fetching</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
