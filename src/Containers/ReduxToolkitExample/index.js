import Axios from 'axios';
import {
  Box, Button, DataTable, Text,
} from 'grommet';
import {
  Actions, StatusDisabled, StatusGood, Tree,
} from 'grommet-icons';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory } from '../../redux/thunks';

function ReduxToolkitExample() {
  // const categories = useSelector((state) => state.data.categories);
  const products = useSelector((state) => state.data.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  const { data: categories } = useQuery('categories', () => Axios.get('https://gorest.co.in/public-api/categories')
    .then((result) => result.data.data)
    .catch((err) => {
      console.error(err);
      return [];
    }));

  return (
    <Box direction="row" pad="medium" gap="medium">
      <Box pad="medium" elevation="medium" fill gap="small">
        <DataTable
          columns={[
            { property: 'id', primary: true, header: <Text>Id</Text> },
            { property: 'name', header: <Text>Name</Text> },
            { property: 'description', header: <Text>Description</Text> },
            {
              property: 'status',
              header: <Text>Status</Text>,
              render: (row) => (row.status ? (
                <StatusGood color="brand" />
              ) : (
                <StatusDisabled color="accent-1" />
              )),
            },
            {
              property: 'actions',
              header: <Actions />,
              render: (row) => (
                <Box direction="row">
                  <Button
                    type="button"
                    onClick={() => dispatch(setCurrentCategory(row.id))}
                    icon={<Tree color="brand" />}
                    plain
                  />
                </Box>
              ),
            },
          ]}
          data={categories}
        />
      </Box>
      {products.length > 0 && (
        <Box pad="medium" elevation="medium" fill gap="small">
          <DataTable
            columns={[
              { property: 'id', primary: true, header: <Text>Id</Text> },
              { property: 'name', header: <Text>Name</Text> },
              {
                property: 'price',
                header: <Text>Price</Text>,
                render: (row) => (
                  <Text>
                    $
                    {row.price}
                  </Text>
                ),
              },
              {
                property: 'discount_amount',
                header: <Text>Discount Price</Text>,
                render: (row) => (
                  <Text color="accent-2">
                    $ $
                    {row.discount_amount}
                  </Text>
                ),
              },
              {
                property: 'status',
                header: <Text>Status</Text>,
                render: (row) => (row.status ? (
                  <StatusGood color="brand" />
                ) : (
                  <StatusDisabled color="accent-1" />
                )),
              },
              {
                property: 'description',
                header: <Text>Description</Text>,
                render: (row) => `${row.description.substring(0, 100)}...`,
              },
            ]}
            data={products}
          />
        </Box>
      )}
    </Box>
  );
}

export default ReduxToolkitExample;
