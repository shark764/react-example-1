import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'grommet';
import { Next, Previous } from 'grommet-icons';
import { log } from '../../utils';
import { setProducts } from '../../redux/actions';
import Products from './Products';

function ReduxExample({ products, storeProducts }) {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0,
    page: 0,
    limit: 0,
  });

  const fetchProducts = useCallback(async () => {
    // callback
    const { data } = await Axios.get(
      `https://gorest.co.in/public-api/products?page=${page}`,
    );
    log(null, 'Products fetched', data.data);

    // Updating redux state with remote products
    storeProducts(data.data);

    setPagination(data.meta.pagination);
  }, [page, storeProducts]);

  useEffect(() => {
    // effect
    fetchProducts();

    return () => {
      console.info('Bye, I will unmount | Redux');
    };
  }, [fetchProducts]);

  return (
    <div>
      {/* <p>Redux!</p> */}

      <Products products={products} />

      <Button
        icon={<Previous />}
        onClick={() => setPage((lastPage) => lastPage - 1)}
        disabled={pagination.page === 1}
      />
      <Text>
        Showing
        {' '}
        {pagination.limit}
        {' '}
        of
        {' '}
        {pagination.total}
        {' '}
        records, page
        {' '}
        {pagination.page}
        {' '}
        of
        {pagination.pages}
      </Text>
      <Button
        icon={<Next />}
        onClick={() => setPage((lastPage) => lastPage + 1)}
        disabled={pagination.page === pagination.pages}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.root.products,
  };
}

const actions = {
  storeProducts: setProducts,
};

export default connect(mapStateToProps, actions)(ReduxExample);
