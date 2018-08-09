import ActionTypes from '../const/ActionTypes'

export default function returnReason(id){
    return{
      type:ActionTypes.FETCH_RETURN_RESULT,
      id
    }
  }
  