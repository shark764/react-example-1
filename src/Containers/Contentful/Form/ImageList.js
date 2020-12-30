import {
  Box, Heading, Image, RadioButtonGroup,
} from 'grommet';
import React from 'react';

function ImageList({ formField, assets, image }) {
  return (
    <Box pad="medium" gap="xxsmall" width="medium">
      {image && (
      <Heading level="5">
        Current selected:
        {image.title}
      </Heading>
      )}
      <RadioButtonGroup
        name={formField}
        options={assets.map((asset) => ({
          label: (
            <Box pad="small" height="small" width="small" key={asset.id}>
              <Image fit="cover" src={asset.file.url} title={asset.title} />
            </Box>
          ),
          value: asset.id,
        }))}
      />
    </Box>
  );
}

export default ImageList;
