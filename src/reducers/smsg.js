import * as ActionTypes from '../const/ActionTypes'

const initState = {
    smsg:[]
}

export default function tableList(state = initState, action){
    switch(action.type){
        case ActionTypes.FETCH_SMSG_SUC:
            const smsg = action.data
        return Object.assign({},state,{smsg})
        case ActionTypes.FETCH_SERACH:
            let newMsg = [];
            for(let i = 0;i<state.smsg.length;i++)
            {
                if(state.smsg[i].mid == action.value){
                    newMsg.push(state.smsg[i])
                }
            }
            const newState = {...state};
                newState.smsg = newMsg;
                return newState;

    default:
        return state;
    }
}