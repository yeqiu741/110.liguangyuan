import * as ActionTypes from '../const/ActionTypes'

const initState = {
    smsg:[]
}

export default function tableList(state = initState, action){
    switch(action.type){
        case ActionTypes.FETCH_SMSG_SUC:
            const smsg = action.data
            console.log(smsg)
        return Object.assign({},state,{smsg})
    default:
        return state;
    }
}