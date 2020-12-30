import Axios from 'axios';
import { Text } from 'grommet';
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { log } from '../../../utils';
import Data from '../Components/Data';
import { PageContext } from '../Context';

function BasicFetch() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('pending');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [page] = useContext(PageContext);

  const fetchData = useCallback(async () => {
    setIsFetching(true);
    // callback
    try {
      const { data } = await Axios.get(
        `https://gorest.co.in/public-api/users?page=${page}`,
      );
      // Here we go again retrieving your data
      setUsers(data.data);
      setIsFetching(false);
      setStatus('success');
    } catch (error) {
      setError(error);
      setIsFetching(false);
      setStatus('error');
    }
  }, [page]);

  useEffect(() => {
    // effect
    fetchData();

    return () => {
      // cleanup
      log('warning', 'Say goodbye to your data');
    };
  }, [fetchData]);

  if (error) {
    console.error(error);
    return <Text color="status-critical">{error}</Text>;
  }

  return <Data users={users} isFetching={isFetching} status={status} />;
}

export default BasicFetch;
