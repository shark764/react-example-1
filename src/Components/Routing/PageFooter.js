import { Anchor, Box, Footer, Text } from 'grommet';
import { Css3, Reactjs } from 'grommet-icons';
import React from 'react';

function PageFooter() {
  return (
    <Footer background="brand" pad="small">
      <Text color="accent-3">Copyright</Text>

      <Box direction="row" justify="end" gap="small">
        <Anchor
          label="React Js"
          href="https://reactjs.org/"
          color="accent-1"
          icon={<Reactjs color="accent-1" />}
          target="_blank"
        />{' '}
        <Anchor
          label="Grommet"
          href="https://v2.grommet.io/"
          color="accent-1"
          icon={<Css3 color="accent-1" />}
          target="_blank"
        />
      </Box>
    </Footer>
  );
}

export default PageFooter;
