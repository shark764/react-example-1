import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(74);

  return (
    <PageContext.Provider value={[page, setPage]}>
      {children}
    </PageContext.Provider>
  );
}
PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageProvider;
