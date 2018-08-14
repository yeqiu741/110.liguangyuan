import {combineReducers} from 'redux'
import entities from './entities.js'
import  departmentInfo from './departmentInfo'
export default combineReducers({
  entities,
  departmentInfo
})