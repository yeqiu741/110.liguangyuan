import  * as ActionTypes from '../const/ActionTypes'

const initState = {
    sta:[]
}

export default function headerList(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_STA_SUC:
            const sta = action.data.list;
            return Object.assign({},state,{ sta })
        default:
        return state;
    }
}