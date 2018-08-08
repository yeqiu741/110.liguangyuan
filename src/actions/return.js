import ActionTypes from '../const/ActionTypes'

export function addItem(item){
    return{
      type:ActionTypes.FETCH_RETURN_RESULT,
      item
    }
  }
  