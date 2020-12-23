import mainReducer from './mainReducer';
import rootReducer from './rootReducer';
import configurationSlice from './configurationSlice';
import dataSlice from './dataSlice';

const reducers = {
  root: rootReducer,
  main: mainReducer,
  [configurationSlice.name]: configurationSlice.reducer,
  [dataSlice.name]: dataSlice.reducer,
  // auth: authReducer,
  // session: sessionReducer
};

export default reducers;
