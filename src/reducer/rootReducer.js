import { combineReducers } from 'redux';
import reducerOne from './reducer';

const rootReducer = combineReducers({
  message: reducerOne
});

export default rootReducer;
