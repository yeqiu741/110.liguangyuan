import * as Actions  from '../const/ActionTypes.js';

export function fetchUserInfo(mid){
    return{
        SERVER_API:{
            type: Actions.ADD_MESSAGE,
            url:'',
            param:{
                mid
            }
        }
    }
}

