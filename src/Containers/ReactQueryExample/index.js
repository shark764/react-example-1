import { Box } from 'grommet';
import React from 'react';
import BasicFetch from './BasicFetch';
import PageProvider from './Context';
import Page from './Page';
import ReactQuery from './ReactQuery';

function ReactQueryExample() {
  return (
    <PageProvider>
      <Page />
      <Box
        direction="row"
        border={{ color: 'brand', size: 'small' }}
        pad="medium"
        gap="medium"
      >
        <Box pad="medium" background="light-3">
          <BasicFetch />
        </Box>
        <Box pad="medium" background="light-3">
          <ReactQuery />
        </Box>
      </Box>
    </PageProvider>
  );
}

export default ReactQueryExample;
