import { combineReducers } from 'redux'
import catReducer from './catReducer'
//import recipeReducer from './recipeReducer'
import filterReducer from './filterReducer'


const rootReducer = combineReducers({
  cat: catReducer,
  filter: filterReducer,
})

export default rootReducer
