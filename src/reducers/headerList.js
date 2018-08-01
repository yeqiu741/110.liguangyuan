import  * as ActionTypes from '../const/ActionTypes'

const initState = {
    message:[]
}

export default function headerList(state = initState,action){
    switch(action.type){
        case ActionTypes.FETCH_USERINFO_SUC:
            const message = action.data;
            return Object.assign({},state,{ message })
        default:
        return state;
    }
}