import React from 'react';
import { Header, Nav, Text } from 'grommet';
import { Link } from 'react-router-dom';
import {
  Calculator,
  CloudComputer,
  Css3,
  DocumentStore,
  Html5,
  Phone,
  Reactjs,
} from 'grommet-icons';

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
];

function PageHeader() {
  return (
    <Header background="brand" pad="medium">
      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link key={link.to} to={link.to}>
              {link.icon}
              {` `}
              <Text color="accent-1">{link.text}</Text>
            </Link>
          );
        })}
      </Nav>
    </Header>
  );
}

export default PageHeader;
