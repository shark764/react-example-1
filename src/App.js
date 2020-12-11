import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing';

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
        <Routing />
      </main>
    </div>
  );
}

export default App;
