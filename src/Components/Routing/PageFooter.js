import { Anchor, Box, Footer } from 'grommet';
import { Css3, Facebook, GraphQl, Reactjs } from 'grommet-icons';
import React from 'react';

function PageFooter() {
  return (
    <Footer background="brand" pad="small">
      <Anchor
        label="Copyright"
        href="https://github.com/facebook/react"
        color="accent-3"
        icon={<Facebook color="accent-3" />}
        target="_blank"
      />

      <Box direction="row" justify="end" gap="medium">
        <Anchor
          label="React Js"
          href="https://reactjs.org/"
          color="accent-1"
          icon={<Reactjs color="accent-1" />}
          target="_blank"
        />
        <Anchor
          label="Grommet"
          href="https://v2.grommet.io/"
          color="accent-1"
          icon={<Css3 color="accent-1" />}
          target="_blank"
        />
        <Anchor
          label="Redux"
          href="https://redux.js.org/"
          color="accent-1"
          icon={<Reactjs color="accent-1" />}
          target="_blank"
        />
        <Anchor
          label="React Query"
          href="https://react-query.tanstack.com/"
          color="accent-1"
          icon={<GraphQl color="accent-1" />}
          target="_blank"
        />
      </Box>
    </Footer>
  );
}

export default PageFooter;
