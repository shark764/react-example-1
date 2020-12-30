import Axios from 'axios';
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Heading,
  Layer,
  MaskedInput,
  RadioButtonGroup,
  Text,
  TextInput,
} from 'grommet';
import {
  Close, MailOption, Refresh, UserAdd,
} from 'grommet-icons';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { gorestToken, log } from '../../../utils';

function LayoutForm({ onClose }) {
  const [value, setValue] = React.useState({});

  // Access the client
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (payload) => Axios.post('https://gorest.co.in/public-api/users', payload, {
      headers: {
        Authorization: `Bearer ${gorestToken}`,
      },
    }),
    {
      onSuccess() {
        // Invalidate and refetch
        queryClient.invalidateQueries('users');
        log('info', 'user added successfully');
      },
    },
  );

  const onSubmit = (values) => {
    console.log('data submitted', values);

    const payload = {
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    };

    mutation.mutate(payload);
  };

  return (
    <Layer
      position="center"
      modal
      // onClickOutside={onClose}
      onEsc={onClose}
    >
      <Box fill="vertical" overflow="auto" width="medium" pad="medium">
        <Box flex={false} direction="row" justify="between">
          <Heading level={2} margin="none">
            <UserAdd />
            {' '}
            Add a user
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>

        {mutation.isLoading && (
          <Box align="center">
            <Text color="accent-3">
              Adding user...
              {' '}
              <Refresh color="accent-3" />
            </Text>
          </Box>
        )}

        {mutation.isSuccess && (
          <Box align="center">
            <Text color="brand">User added successfully</Text>
          </Box>
        )}

        <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
          <Form
            value={value}
            onChange={(nextValue, { touched }) => {
              console.log('Change', nextValue, touched);
              setValue(nextValue);
            }}
            onReset={() => setValue({})}
            onSubmit={(event) => {
              console.log('Submit', event.value, event.touched);
              onSubmit(event.value);
            }}
          >
            <FormField label="Name" name="name">
              <TextInput name="name" />
            </FormField>

            <FormField label="Email" name="email" required>
              <MaskedInput
                name="email"
                mask={[
                  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                  { fixed: '@' },
                  { regexp: /^[\w]+$/, placeholder: 'my' },
                  { fixed: '.' },
                  { regexp: /^[\w]+$/, placeholder: 'com' },
                ]}
                icon={<MailOption />}
              />
            </FormField>

            <FormField name="gender">
              <RadioButtonGroup name="gender" options={['Male', 'Female']} />
            </FormField>

            <FormField name="status">
              <CheckBox name="status" label="Active?" />
            </FormField>

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button label="Cancel" />
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Submit" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Layer>
  );
}

export default LayoutForm;
