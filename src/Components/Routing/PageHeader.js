import React from 'react';
import { Box, Header, Nav, Select, Text, TextInput } from 'grommet';
import { Link, useLocation } from 'react-router-dom';
import {
  Calculator,
  CloudComputer,
  CloudSoftware,
  Css3,
  DocumentStore,
  GraphQl,
  Html5,
  Phone,
  Reactjs,
  Search,
  Tools,
} from 'grommet-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useFormatMessage } from 'react-intl-hooks';
import { setTheme } from '../../redux/actions';
import configurationSlice from '../../redux/reducers/configurationSlice';
import { themes } from '../../utils';
import dataSlice from '../../redux/reducers/dataSlice';

const { setLang } = configurationSlice.actions;
const { setSearchString } = dataSlice.actions;

const links = [
  { text: 'Math', to: '/', icon: (props) => <Calculator {...props} /> },
  { text: 'JSX', to: '/jsx', icon: (props) => <Reactjs {...props} /> },
  { text: 'Components', to: '/samples', icon: (props) => <Html5 {...props} /> },
  { text: 'Dialpad', to: '/dial', icon: (props) => <Phone {...props} /> },
  {
    text: 'API Fetching',
    to: '/api',
    icon: (props) => <DocumentStore {...props} />,
  },
  { text: 'Styling', to: '/styled', icon: (props) => <Css3 {...props} /> },
  {
    text: 'Users',
    to: '/api-styled',
    icon: (props) => <CloudComputer {...props} />,
  },
  { text: 'Redux', to: '/redux', icon: (props) => <Reactjs {...props} /> },
  {
    text: 'Redux Toolkit',
    to: '/toolkit',
    icon: (props) => <Tools {...props} />,
  },
  {
    text: 'React Query',
    to: '/rquery',
    icon: (props) => <GraphQl {...props} />,
  },
  {
    text: 'Contentful CMS',
    to: '/contentful',
    icon: (props) => <CloudSoftware {...props} />,
  },
];

function PageHeader() {
  const location = useLocation();
  const theme = useSelector((state) => state.main.theme);
  const language = useSelector((state) => state.configuration.language);
  const searchString = useSelector((state) => state.data.searchString);
  const dispatch = useDispatch();

  const translateMessage = useFormatMessage();

  console.log({ location });

  return (
    <Header background="brand" pad="medium">
      <Text size="xxlarge" color="accent-3">
        {translateMessage({
          id: 'app.navbar.header',
          defaultMessage: 'Learn React',
        })}
      </Text>

      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link key={link.to} to={link.to} title={link.text}>
              {link.icon({
                color: link.to === location.pathname ? 'accent-2' : 'accent-1',
              })}
            </Link>
          );
        })}
      </Nav>

      {location.pathname === '/contentful' && (
        <Box>
          <TextInput
            icon={<Search />}
            placeholder="search ..."
            value={searchString}
            onChange={(event) =>
              dispatch(setSearchString(event.target.value || ''))
            }
          />
        </Box>
      )}

      <Box justify="end" direction="row" gap="medium">
        <Select
          value={language}
          options={['en', 'es', 'fr', 'de']}
          onChange={({ option }) => dispatch(setLang(option))}
        />
        <Select
          value={theme}
          options={Object.keys(themes)}
          onChange={({ option }) => dispatch(setTheme(option))}
        />
      </Box>
    </Header>
  );
}

export default PageHeader;
