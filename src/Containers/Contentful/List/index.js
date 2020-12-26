import { Box } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/thunks';

import Table from './Table';

function List() {
  const searchString = useSelector((state) => state.data.searchString);
  const users = useSelector((state) => state.data.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getUsers());
  }, [dispatch, searchString]);

  return (
    <Box pad="medium" elevation="medium" fill gap="small" width="large">
      <Table users={users} />
    </Box>
  );
}

export default List;
