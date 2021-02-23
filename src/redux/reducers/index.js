import { combineReducers } from 'redux'
import catReducer from './catReducer'
import filterReducer from './filterReducer'
import menuReducer  from './menuReducer'
import recipeReducer from './recipeReducer'


const rootReducer = combineReducers({
  cat: catReducer,
  menu: menuReducer,
  filter: filterReducer,
  recipe: recipeReducer,
})

export default rootReducer
