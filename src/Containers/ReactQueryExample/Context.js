import React, { createContext, useState } from 'react';

export const PageContext = createContext();

function PageProvider(props) {
  const [page, setPage] = useState(74);

  return (
    <PageContext.Provider value={[page, setPage]}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageProvider;
