import {
  Box,
  Button,
  DateInput,
  Form,
  FormField,
  Layer,
  RadioButtonGroup,
  RangeInput,
  Text,
  TextArea,
  TextInput,
} from 'grommet';
import { Gallery } from 'grommet-icons';
import React from 'react';
import { capitalize } from '../../../utils';
import ImageList from './ImageList';

function FormLayout({ onSubmit, assets }) {
  const [open, setOpen] = React.useState();
  const [value, setValue] = React.useState({
    durationHour: 0,
    durationMin: 0,
    durationSec: 0,
  });
  const [image, setImage] = React.useState(null);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
        if (nextValue.image) {
          setImage(
            assets.find((asset) => {
              return asset.id === nextValue.image;
            })
          );
        }
      }}
      onReset={() => setValue({})}
      onSubmit={(event) => {
        console.log('Submit', event.value, event.touched);
        onSubmit(event.value);
      }}
    >
      {[
        'title',
        'artist',
        'label',
        'studio',
        'producer',
        'duration',
        'image',
        'genre',
        'releasedAt',
        'description',
        'listenUrl',
        'buyItUrl',
      ].map((formField) => {
        let fieldLayout;
        switch (formField) {
          case 'duration':
            fieldLayout = (
              <Box direction="row" gap="medium">
                <Box align="center">
                  <RangeInput
                    name={`${formField}Hour`}
                    min={0}
                    max={3}
                    step={1}
                  />
                  <Text>hh: {value[`${formField}Hour`]}</Text>
                </Box>
                <Box align="center">
                  <RangeInput
                    name={`${formField}Min`}
                    min={0}
                    max={60}
                    step={1}
                  />
                  <Text>mm: {value[`${formField}Min`]}</Text>
                </Box>
                <Box align="center">
                  <RangeInput
                    name={`${formField}Sec`}
                    min={0}
                    max={60}
                    step={1}
                  />
                  <Text>ss: {value[`${formField}Sec`]}</Text>
                </Box>
              </Box>
            );
            break;

          case 'image':
            fieldLayout = (
              <>
                {image && (
                  <Text color="accent-1" alignSelf="center">
                    {image.title}
                  </Text>
                )}
                <Button
                  icon={<Gallery />}
                  label="Choose image"
                  onClick={onOpen}
                  plain
                  margin="small"
                />
                {open && (
                  <Layer
                    position="center"
                    full="vertical"
                    onClickOutside={onClose}
                    onEsc={onClose}
                  >
                    <Box flex overflow="auto" pad="xsmall">
                      <ImageList
                        formField={formField}
                        assets={assets}
                        image={image}
                      />
                    </Box>
                  </Layer>
                )}
              </>
            );
            break;

          case 'genre':
            fieldLayout = (
              <RadioButtonGroup
                name={formField}
                options={[
                  'Alternative Rock',
                  'Grunge',
                  'Hard Rock',
                  'New Wave',
                  'Electro House',
                  'R&B',
                  'Reggae',
                  'Dance-pop',
                  'Hip hop',
                  'Electro',
                  'Pop',
                  'Glam Rock',
                  'Heavy Metal',
                  'Jazz Fusion',
                  'Punk Rock',
                  'Pop/Rock',
                ]}
              />
            );
            break;

          case 'releasedAt':
            fieldLayout = <DateInput name={formField} format="yyyy-mm-dd" />;
            break;

          case 'description':
            fieldLayout = <TextArea name={formField} />;
            break;

          default:
            fieldLayout = <TextInput name={formField} />;
            break;
        }

        return (
          <FormField
            label={capitalize(formField)}
            name={formField}
            key={formField}
          >
            {fieldLayout}
          </FormField>
        );
      })}

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button label="Cancel" />
        <Button type="reset" label="Reset" />
        <Button type="submit" label="Submit" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
