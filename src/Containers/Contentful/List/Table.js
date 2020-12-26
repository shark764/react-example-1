import { DataTable, Text } from 'grommet';
import React from 'react';

function Table({ countries }) {
  return (
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
          primary: true,
        },
        {
          property: 'name',
          header: <Text>Name</Text>,
        },
        {
          property: 'continent',
          header: <Text>Continent</Text>,
        },
        {
          property: 'language',
          header: <Text>Language</Text>,
        },
      ]}
      data={countries}
    />
  );
}

export default Table;
