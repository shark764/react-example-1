import { Box } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from '../../../redux/thunks';

import Table from './Table';

function List() {
  const searchString = useSelector((state) => state.data.searchString);
  const records = useSelector((state) => state.data.records);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getRecords());
  }, [dispatch, searchString]);

  return (
    <Box pad="medium" elevation="medium" fill gap="small" width="large">
      <Table records={records} />
    </Box>
  );
}

export default List;
