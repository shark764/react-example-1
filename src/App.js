import logo from './logo.svg';
import './App.css';
import Calc from './Calc';
import Examples from './Containers/Examples';
import JSX from './Containers/JSX';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main className="App-main">
        <Calc />
        <Examples />
        <JSX />
      </main>
    </div>
  );
}

export default App;
