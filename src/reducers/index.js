import { combineReducers } from 'redux';
import authReducer from './reducer_authentication'

const rootReducer = combineReducers({
  profile: authReducer
});

export default rootReducer;
