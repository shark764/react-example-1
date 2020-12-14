const initialState = {
  products: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'app/setProducts':
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
