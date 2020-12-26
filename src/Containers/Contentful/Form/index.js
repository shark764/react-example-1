import { Box } from 'grommet';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createCountry } from '../../../redux/thunks';
import FormLayout from './FormLayout';

function Form() {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log('values submitted', values);

    dispatch(createCountry(values));
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      <FormLayout onSubmit={onSubmit} />
    </Box>
  );
}

export default Form;
