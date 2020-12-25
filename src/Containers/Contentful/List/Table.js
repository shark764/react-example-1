import { DataTable, Text } from 'grommet';
import { DateTime, Duration } from 'luxon';
import React from 'react';

function Table({ records }) {
  return (
    <DataTable
      background={{
        header: 'brand',
        body: ['white', 'accent-3'],
        footer: 'accent-1',
      }}
      columns={[
        {
          property: 'id',
          header: <Text>Id</Text>,
          render: (datum) => <Text size="small">{datum.id}</Text>,
          primary: true,
        },
        {
          property: 'title',
          header: <Text>Title</Text>,
          render: (datum) => <Text size="small">{datum.title}</Text>,
        },
        {
          property: 'artist',
          header: <Text>Artist</Text>,
          render: (datum) => <Text size="small">{datum.artist}</Text>,
        },
        {
          property: 'label',
          header: <Text>Label</Text>,
          render: (datum) => <Text size="small">{datum.label}</Text>,
        },
        {
          property: 'studio',
          header: <Text>Studio</Text>,
          render: (datum) => <Text size="small">{datum.studio}</Text>,
        },
        {
          property: 'producer',
          header: <Text>Producer</Text>,
          render: (datum) => <Text size="small">{datum.producer}</Text>,
        },
        {
          property: 'genre',
          header: <Text>Genre</Text>,
          render: (datum) => <Text size="small">{datum.genre}</Text>,
        },
        {
          property: 'duration',
          header: <Text>Duration</Text>,
          render: (datum) => (
            <Text size="small">
              {Duration.fromMillis(datum.duration).toFormat('hh:mm:ss')}
            </Text>
          ),
        },
        {
          property: 'releasedAt',
          header: <Text>Released At</Text>,
          render: (datum) => (
            <Text size="small">
              {DateTime.fromISO(datum.releasedAt).toLocaleString(
                DateTime.DATETIME_MED
              )}
            </Text>
          ),
        },
      ]}
      data={records}
    />
  );
}

export default Table;
