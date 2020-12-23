import React from 'react';
import { Box, Grommet } from 'grommet';
// import './App.css';
import Routing from './Components/Routing';
import PageHeader from './Components/Routing/PageHeader';
import { HashRouter } from 'react-router-dom';
import PageFooter from './Components/Routing/PageFooter';
import { useSelector } from 'react-redux';
import { themes } from './utils';

function App() {
  const selectedTheme = useSelector((state) => state.main.theme);

  return (
    <HashRouter>
      <Grommet theme={themes[selectedTheme]}>
        <PageHeader />

        <Box pad="medium">
          <div className="App">
            <main className="App-main">
              <Routing />
            </main>
          </div>
        </Box>

        <PageFooter />
      </Grommet>
    </HashRouter>
  );
}

export default App;
