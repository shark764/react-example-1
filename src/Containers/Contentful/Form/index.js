import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/thunks';
import { createEntry } from '../sdk';
import FormLayout from './FormLayout';

function Form() {
  // const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const postMutation = useMutation(
    function (data) {
      return createEntry(data);
    },
    {
      onSuccess: function (args) {
        queryClient.invalidateQueries('contentfulFetchUsers');
      },
      onError: function (err) {
        console.error(err);
      },
    }
  );

  const onSubmit = (values) => {
    const payload = {
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    };

    console.log('values submitted', values, payload);

    postMutation.mutate(payload);

    // dispatch(createUser(payload));
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {postMutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            User created successfully... <StatusGood color="brand" />
          </Text>
        </Box>
      )}

      {postMutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            An error has occurred... <StatusCritical color="accent-1" />
          </Text>
        </Box>
      )}

      <FormLayout onSubmit={onSubmit} />
    </Box>
  );
}

export default Form;
