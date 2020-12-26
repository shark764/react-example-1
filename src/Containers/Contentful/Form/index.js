import { Box } from 'grommet';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/thunks';
import FormLayout from './FormLayout';

function Form() {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const payload = {
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    };

    console.log('values submitted', values, payload);

    dispatch(createUser(payload));
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      <FormLayout onSubmit={onSubmit} />
    </Box>
  );
}

export default Form;
