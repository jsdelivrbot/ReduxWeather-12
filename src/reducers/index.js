import { combineReducers } from 'redux';
import WeatherReduceer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReduceer
});

export default rootReducer;
