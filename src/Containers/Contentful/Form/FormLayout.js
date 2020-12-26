import {
  Box,
  Button,
  Form,
  FormField,
  RadioButtonGroup,
  TextInput,
} from 'grommet';
import React from 'react';

function FormLayout({ onSubmit }) {
  const [value, setValue] = React.useState({});

  return (
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

      <FormField label="Continent" name="continent">
        <RadioButtonGroup
          name="continent"
          options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
        />
      </FormField>

      <FormField label="Language" name="language">
        <RadioButtonGroup
          name="language"
          options={[
            'Chinese',
            'Deutsch',
            'English',
            'French',
            'Italian',
            'Japanese',
            'Korean',
            'Portuguese',
            'Spanish',
          ]}
        />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button label="Cancel" />
        <Button type="reset" label="Reset" />
        <Button type="submit" label="Submit" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
