import displayForecast from './displayForecast'
import displayMessage from './displayMessage'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  displayForecast,
  displayMessage,
})


export default allReducers