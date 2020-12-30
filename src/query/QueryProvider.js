import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PropTypes from 'prop-types';

// Create a client
const queryClient = new QueryClient();

function QueryProvider({ children }) {
  // Provide the client to your App
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QueryProvider;
