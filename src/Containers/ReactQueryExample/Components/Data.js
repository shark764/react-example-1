import { Box, DataTable, Text } from 'grommet';
import {
  Refresh,
  StatusCritical,
  StatusGood,
  User,
  UserFemale,
} from 'grommet-icons';
import { DateTime } from 'luxon';
import React from 'react';

function Data({ users, isLoading, isFetching, status }) {
  return (
    <>
      <Box pad="medium" align="center">
        {isFetching ? (
          <Text color="accent-1">
            Fetching... <Refresh />
          </Text>
        ) : (
          <Text color="brand">Status: {status}</Text>
        )}
      </Box>
      <DataTable
        background={{
          header: 'brand',
          body: ['white', 'accent-3'],
          footer: 'accent-1',
        }}
        columns={[
          {
            property: 'id',
            header: <Text>Id</Text>,
            render: (datum) => <Text size="small">{datum.id}</Text>,
            primary: true,
          },
          {
            property: 'name',
            header: <Text>Name</Text>,
            render: (datum) => <Text size="small">{datum.name}</Text>,
          },
          {
            property: 'email',
            header: <Text>Email</Text>,
            render: (datum) => <Text size="small">{datum.email}</Text>,
          },
          {
            property: 'gender',
            header: <Text>Gender</Text>,
            render: (datum) =>
              datum.gender === 'Male' ? (
                <User color="brand" size="medium" />
              ) : (
                <UserFemale color="accent-1" size="medium" />
              ),
          },
          {
            property: 'created_at',
            header: <Text>Created At</Text>,
            render: (datum) => (
              <Text size="small">
                {DateTime.fromISO(datum.created_at).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </Text>
            ),
          },
          {
            property: 'updated_at',
            header: <Text>Updated At</Text>,
            render: (datum) => (
              <Text size="small">
                {DateTime.fromISO(datum.updated_at).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </Text>
            ),
          },
          {
            property: 'status',
            header: <Text>Status</Text>,
            render: (datum) =>
              datum.status === 'Active' ? (
                <StatusGood color="brand" size="medium" />
              ) : (
                <StatusCritical color="accent-2" size="medium" />
              ),
          },
        ]}
        data={users}
      />
    </>
  );
}

export default Data;
