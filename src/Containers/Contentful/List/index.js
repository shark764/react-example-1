import { Box } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../../redux/thunks';

import Table from './Table';

function List() {
  const searchString = useSelector((state) => state.data.searchString);
  const countries = useSelector((state) => state.data.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getCountries());
  }, [dispatch, searchString]);

  return (
    <Box pad="medium" elevation="medium" fill gap="small" width="large">
      <Table countries={countries} />
    </Box>
  );
}

export default List;
