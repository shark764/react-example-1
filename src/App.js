import React from 'react';
import { Grommet } from 'grommet';
import './App.css';
import Routing from './Components/Routing';
import PageHeader from './Components/Routing/PageHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import PageFooter from './Components/Routing/PageFooter';

const theme = {
  global: {
    colors: {
      brand: '#25424C',
      'accent-1': '#FB770D',
      'accent-2': '#FFA45B',
      'accent-3': '#FFEBDB',
    },
  },
};

function App() {
  return (
    <Router>
      <Grommet theme={theme}>
        <PageHeader />

        <div className="App">
          <main className="App-main">
            <Routing />
          </main>
        </div>

        <PageFooter />
      </Grommet>
    </Router>
  );
}

export default App;
