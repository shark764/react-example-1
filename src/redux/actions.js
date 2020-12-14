export function setProducts(products) {
  return {
    type: 'app/setProducts',
    payload: products,
  };
}

export function setTheme(theme) {
  return {
    type: 'main/setTheme',
    payload: theme,
  };
}
