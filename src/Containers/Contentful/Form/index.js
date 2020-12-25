import { Box } from 'grommet';
import { Duration } from 'luxon';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRecord, getImages } from '../../../redux/thunks';
import FormLayout from './FormLayout';

function Form() {
  const assets = useSelector((state) => state.data.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getImages());
  }, [dispatch]);

  const onSubmit = (values) => {
    let payload = {
      ...values,
      duration: Duration.fromObject({
        hour: values.durationHour,
        minutes: values.durationMin,
        seconds: values.durationSec,
      }).as('milliseconds'),
    };
    delete payload.durationHour;
    delete payload.durationMin;
    delete payload.durationSec;

    console.log('values submitted', values, payload);

    dispatch(createRecord(payload));
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      <FormLayout onSubmit={onSubmit} assets={assets} />
    </Box>
  );
}

export default Form;
