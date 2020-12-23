import Axios from 'axios';
import { Button, Text } from 'grommet';
import { Refresh, UserAdd } from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import Data from '../Components/Data';
import { PageContext } from '../Context';
import LayoutForm from './LayoutForm';

function ReactQuery() {
  const [open, setOpen] = useState(false);
  const [page] = useContext(PageContext);
  const { data, error, isLoading, isFetching, status } = useQuery(
    'users',
    function () {
      return Axios.get(`https://gorest.co.in/public-api/users?page=${page}`)
        .then((result) => {
          return result.data.data;
        })
        .catch((err) => {
          console.error(err);
          return [];
        });
    }
  );

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  if (isLoading) {
    return (
      <Text color="accent-1">
        Loading... <Refresh />
      </Text>
    );
  }

  if (error) {
    console.error(error);
    return <Text color="status-critical">{error}</Text>;
  }

  return (
    <>
      <Button icon={<UserAdd />} label="Add" onClick={onOpen} />
      <Data
        users={data}
        isLoading={isLoading}
        isFetching={isFetching}
        status={status}
      />
      {open && <LayoutForm onClose={onClose} />}
    </>
  );
}

export default ReactQuery;
