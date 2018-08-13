import { combineReducers } from 'redux'
import feature from './feature'
import departmentMessage from './departmentMessage'
import hadDepartment from './hadDepartment'

const rootReducer = combineReducers({
    feature,
    departmentMessage,
    hadDepartment
})
export default rootReducer