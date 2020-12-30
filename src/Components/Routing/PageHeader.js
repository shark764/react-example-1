import React from 'react';
import {
  Box, Header, Nav, Select, Text, TextInput,
} from 'grommet';
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
import { useAuth0 } from '@auth0/auth0-react';
import { setTheme } from '../../redux/actions';
import configurationSlice from '../../redux/reducers/configurationSlice';
import { themes } from '../../utils';
import dataSlice from '../../redux/reducers/dataSlice';
import AccountMenu from './AccountMenu';

const { setLang } = configurationSlice.actions;
const { setSearchString } = dataSlice.actions;

const publicLinks = [
  {
    text: 'Math',
    to: '/',
    icon: (props) => <Calculator {...props} />,
    sortOrder: 1,
  },
  {
    text: 'JSX',
    to: '/jsx',
    icon: (props) => <Reactjs {...props} />,
    sortOrder: 2,
  },
  {
    text: 'Components',
    to: '/samples',
    icon: (props) => <Html5 {...props} />,
    sortOrder: 3,
  },
  {
    text: 'Dialpad',
    to: '/dial',
    icon: (props) => <Phone {...props} />,
    sortOrder: 4,
  },
  {
    text: 'Styling',
    to: '/styled',
    icon: (props) => <Css3 {...props} />,
    sortOrder: 6,
  },
];
const privateLinks = [
  {
    text: 'API Fetching',
    to: '/api',
    icon: (props) => <DocumentStore {...props} />,
    sortOrder: 5,
  },
  {
    text: 'Users',
    to: '/api-styled',
    icon: (props) => <CloudComputer {...props} />,
    sortOrder: 7,
  },
  {
    text: 'Redux',
    to: '/redux',
    icon: (props) => <Reactjs {...props} />,
    sortOrder: 8,
  },
  {
    text: 'Redux Toolkit',
    to: '/toolkit',
    icon: (props) => <Tools {...props} />,
    sortOrder: 9,
  },
  {
    text: 'React Query',
    to: '/rquery',
    icon: (props) => <GraphQl {...props} />,
    sortOrder: 10,
  },
  {
    text: 'Contentful CMS',
    to: '/contentful',
    icon: (props) => <CloudSoftware {...props} />,
    sortOrder: 11,
  },
];
let links = [...publicLinks];

function PageHeader() {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const theme = useSelector((state) => state.main.theme);
  const language = useSelector((state) => state.configuration.language);
  const searchString = useSelector((state) => state.data.searchString);
  const dispatch = useDispatch();

  const translateMessage = useFormatMessage();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    links = [...publicLinks, ...privateLinks].sort(
      (a, b) => a.sortOrder - b.sortOrder,
    );
  }

  return (
    <Header background="brand" pad="medium">
      <Text size="xxlarge" color="accent-3">
        {translateMessage({
          id: 'app.navbar.header',
          defaultMessage: 'Learn React',
        })}
      </Text>

      <Nav direction="row">
        {links.map((link) => (
          <Link key={link.to} to={link.to} title={link.text}>
            {link.icon({
              color: link.to === location.pathname ? 'accent-2' : 'accent-1',
            })}
          </Link>
        ))}
      </Nav>

      {isAuthenticated && location.pathname === '/contentful' && (
        <Box>
          <TextInput
            icon={<Search />}
            placeholder="search ..."
            value={searchString}
            onChange={(event) => dispatch(setSearchString(event.target.value || ''))}
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

        <AccountMenu />
      </Box>
    </Header>
  );
}

export default PageHeader;
