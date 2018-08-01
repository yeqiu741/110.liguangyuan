import * as ActionTypes from '../const/ActionTypes'

const initState = {
    cds:[],
    list:[]
}

export default function cds(state = initState, action){
    switch(action.type){
        case ActionTypes.FETCH_CDS_SUC:
            const cds = action.data.basic_info;
            const list = action.data.list;

            console.log(cds)
            console.log(list)
        return Object.assign({},state,{cds,list})
    default:
        return state;
    }
}