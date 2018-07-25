import { DAILOG_ADD, DAILOG_MANY } from '../const/ActionTypes'

export default function todoList(state = { dailogadd},action){
  switch(action.type){
    case DAILOG_ADD:{
      dailogAdd:false
      return newState;
    }
    case DAILOG_MANY: {
        dailogMany:false
      return newState;
    }
    default:
    return state;
  }
}