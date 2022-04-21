//Import all reducers
import { calcReducer } from './calculatorReducer'

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  calcInfo: calcReducer,
  // reduceroutput1,
})

export default allReducers;