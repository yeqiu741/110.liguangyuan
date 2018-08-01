import headerList from './headerList'
import tableList from './tableList'
import smsg from './smsg'
import Cdetails from '../reducers/Cdetails'
import { combineReducers } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

export default combineReducers({
    tableList,
    headerList,
    smsg,
    Cdetails
})