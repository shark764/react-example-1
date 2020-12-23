import { Box, DataTable, Text } from 'grommet';
import { StatusCritical, StatusGood, User, UserFemale } from 'grommet-icons';
import { DateTime, Duration } from 'luxon';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from '../../redux/thunks';

function Contentful() {
  const searchString = useSelector((state) => state.data.searchString);
  const records = useSelector((state) => state.data.records);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getRecords());
  }, [dispatch, searchString]);

  return (
    <Box border={{ color: 'brand', size: 'small' }} pad="medium" gap="medium">
      <Box pad="medium" background="light-3">
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
      </Box>
    </Box>
  );
}

export default Contentful;
