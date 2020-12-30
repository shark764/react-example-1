import { Box, Text } from 'grommet';
import { Refresh, StatusCritical } from 'grommet-icons';
import React from 'react';
import { useQuery } from 'react-query';
import { getEntries } from '../sdk';

import Table from './Table';

function List() {
  // const searchString = useSelector((state) => state.data.searchString);
  // const users = useSelector((state) => state.data.users);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // effect
  //   dispatch(getUsers());
  // }, [dispatch, searchString]);

  const {
    data: users, isFetching, isLoading, error,
  } = useQuery(
    'contentfulFetchUsers',
    () => getEntries({
      content_type: 'users',
    }),
  );

  if (isLoading) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-1">
          Loading...
          {' '}
          <Refresh color="accent-1" />
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-2">
          An error has occurred...
          {' '}
          <StatusCritical color="accent-2" />
        </Text>
      </Box>
    );
  }

  return (
    <Box pad="medium" elevation="medium" fill gap="small" width="large">
      {isFetching && (
        <Box direction="row" gap="medium">
          <Text color="accent-2">
            Fetching data...
            {' '}
            <Refresh color="accent-2" />
          </Text>
        </Box>
      )}

      <Table users={users} />
    </Box>
  );
}

export default List;
