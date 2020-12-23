import { Box, TextInput } from 'grommet';
import { Shift } from 'grommet-icons';
import React, { useContext } from 'react';
import { PageContext } from './Context';

function Page() {
  const [page, setPage] = useContext(PageContext);

  return (
    <Box pad="medium">
      <TextInput
        type="number"
        value={page}
        onChange={(event) => setPage(parseInt(event.target.value, 10))}
        icon={<Shift />}
      />
    </Box>
  );
}

export default Page;
