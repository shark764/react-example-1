import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import rootReducer from './rootReducer';

const reducers = combineReducers({
  root: rootReducer,
  main: mainReducer,
  // auth: authReducer,
  // session: sessionReducer
});

export default reducers;
