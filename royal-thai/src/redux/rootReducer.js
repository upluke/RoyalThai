import { combineReducers } from 'redux'
import {categoriesReducer, dataReducer} from './reducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    data: dataReducer,
  
  })

export default rootReducer