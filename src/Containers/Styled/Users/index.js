import Axios from 'axios';
import {
  Box, DataTable, Heading, Text,
} from 'grommet';
import {
  StatusDisabled, StatusGood, User, UserFemale,
} from 'grommet-icons';
import { DateTime } from 'luxon';
import React from 'react';
import { useQuery } from 'react-query';

function Users() {
  // const [users, setUsers] = useState([]);

  // const fetchUsers = useCallback(async () => {
  //   const {
  //     data: { data },
  //   } = await Axios.get(`https://gorest.co.in/public-api/users?page=${70}`);
  //   // console.log('users', data);
  //   setUsers(data);
  // }, []);

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  const { data } = useQuery('users', () => Axios.get('https://gorest.co.in/public-api/users')
    .then((result) => result.data.data)
    .catch((err) => {
      console.error(err);
      return [];
    }));
  const users = data;

  return (
    <Box direction="row" pad="xxsmall" gap="medium">
      <Box pad="small">
        <DataTable
          columns={[
            { property: 'id', primary: true, header: <Text>Id</Text> },
            { property: 'name', header: <Text>Name</Text> },
            { property: 'email', header: <Text>Email</Text> },
            {
              property: 'gender',
              header: <Text>Gender</Text>,
              render: (row) => (row.gender === 'Male' ? (
                <User color="brand" />
              ) : (
                <UserFemale color="accent-1" />
              )),
            },
            {
              property: 'status',
              header: <Text>Status</Text>,
              render: (row) => (row.status === 'Active' ? (
                <StatusGood color="brand" />
              ) : (
                <StatusDisabled color="accent-1" />
              )),
            },
            {
              property: 'created_at',
              header: <Text>Created At</Text>,
              render: (row) => DateTime.fromISO(row.created_at).toLocaleString(
                DateTime.DATETIME_MED,
              ),
            },
            {
              property: 'updated_at',
              header: <Text>Updated At</Text>,
              render: (row) => DateTime.fromISO(row.updated_at).toLocaleString(
                DateTime.DATETIME_MED,
              ),
            },
          ]}
          data={users}
        />
      </Box>
      <Box pad="small">
        <Text color="accent-1" size="large">
          This is another box
        </Text>
        <Heading level="1" color="brand">
          This is a styled heading
        </Heading>
      </Box>
    </Box>
  );
}

export default Users;
