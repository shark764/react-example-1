import React from 'react';
import { Box, Header, Nav, Select, Text } from 'grommet';
import { Link, useLocation } from 'react-router-dom';
import {
  Calculator,
  CloudComputer,
  Css3,
  DocumentStore,
  Html5,
  Phone,
  Reactjs,
} from 'grommet-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/actions';
import { themes } from '../../utils';

const links = [
  { text: 'Math', to: '/', icon: <Calculator color="accent-1" /> },
  { text: 'JSX', to: '/jsx', icon: <Reactjs color="accent-1" /> },
  { text: 'Components', to: '/samples', icon: <Html5 color="accent-1" /> },
  { text: 'Dialpad', to: '/dial', icon: <Phone color="accent-1" /> },
  {
    text: 'API Fetching',
    to: '/api',
    icon: <DocumentStore color="accent-1" />,
  },
  { text: 'Styling', to: '/styled', icon: <Css3 color="accent-1" /> },
  {
    text: 'Users',
    to: '/api-styled',
    icon: <CloudComputer color="accent-1" />,
  },
  {
    text: 'Redux',
    to: '/redux',
    icon: <Reactjs color="accent-1" />,
  },
];

function PageHeader() {
  const location = useLocation();
  const theme = useSelector((state) => state.main.theme);
  const dispatch = useDispatch();

  console.log({ location });

  return (
    <Header background="brand" pad="medium">
      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link key={link.to} to={link.to}>
              {link.icon}
              {` `}
              <Text
                color={link.to === location.pathname ? 'accent-2' : 'accent-1'}
              >
                {link.text}
              </Text>
            </Link>
          );
        })}
      </Nav>

      <Box justify="end">
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
