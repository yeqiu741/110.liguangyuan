import * as actions from '../const/ActionType'

export function changeDailog(dailog){
    return{
        type:actions.FETCH_FEATURE_INFO,
        dailog
    }
}

export function changePeopleDailog(){
    return{
        type:actions.CHANGEPEOPLEDAILOG,
        
    }
}