import headerList from './headerList'
import tableList from './tableList'
import smsg from './smsg'
import Cdetails from '../reducers/Cdetails'
import { combineReducers } from 'redux';
import sta from './sta'

export default combineReducers({
    tableList,
    headerList,
    smsg,
    Cdetails,
    sta
})