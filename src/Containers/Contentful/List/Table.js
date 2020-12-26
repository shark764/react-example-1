import { DataTable, Text } from 'grommet';
import { StatusCritical, StatusGood, User, UserFemale } from 'grommet-icons';
import React from 'react';

function Table({ users }) {
  return (
    <DataTable
      background={{
        header: 'brand',
        body: ['white', 'accent-3'],
        footer: 'accent-1',
      }}
      columns={[
        { property: 'id', primary: true, header: <Text>Id</Text> },
        { property: 'name', header: <Text>Name</Text> },
        { property: 'email', header: <Text>Email</Text> },
        {
          property: 'gender',
          header: <Text>Gender</Text>,
          render: (row) => {
            return row.gender === 'Male' ? (
              <User color="brand" />
            ) : (
              <UserFemale color="accent-2" />
            );
          },
        },
        {
          property: 'status',
          header: <Text>Status</Text>,
          render: (row) => {
            return row.status === 'Active' ? (
              <StatusGood color="brand" />
            ) : (
              <StatusCritical color="accent-1" />
            );
          },
        },
      ]}
      data={users}
    />
  );
}

export default Table;
