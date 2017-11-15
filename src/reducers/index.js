import { combineReducers } from 'redux';
import forecast from './forecast_reducer'

const rootReducer = combineReducers({
  forecast
});

export default rootReducer;
