import { DataTable, Text } from 'grommet';
import { StatusDisabled, StatusGood } from 'grommet-icons';
import React from 'react';

function Products({ products }) {
  return (
    <DataTable
      columns={[
        { property: 'id', primary: true, header: <Text>Id</Text> },
        { property: 'name', header: <Text>Name</Text> },
        {
          property: 'price',
          header: <Text>Price</Text>,
          render: (row) => <Text>$ {row.price}</Text>,
        },
        {
          property: 'discount_amount',
          header: <Text>Discount Price</Text>,
          render: (row) => (
            <Text color="accent-2">$ ${row.discount_amount}</Text>
          ),
        },
        {
          property: 'status',
          header: <Text>Status</Text>,
          render: (row) => {
            return row.status ? (
              <StatusGood color="brand" />
            ) : (
              <StatusDisabled color="accent-1" />
            );
          },
        },
        {
          property: 'description',
          header: <Text>Description</Text>,
          render: (row) => `${row.description.substring(0, 100)}...`,
        },
      ]}
      data={products}
    />
  );
}

export default Products;
