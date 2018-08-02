

import * as ActionTypes  from '../const/ActionTypes';

// export function fetchUserInfo(mid){
//     return{
//         SERVER_API:{
//             type: Actions.ADD_MESSAGE,
//             url:'',
//             param:{
//                 mid
//             }
//         }
//     }
// }

export function fetchSearch(value){
    return{
        type:ActionTypes.FETCH_SERACH,
        value
    }
}