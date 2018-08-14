import * as ActionTypes from '../const/ActionType'


export function changeCurrentSelect(data) {
    return {
      type: ActionTypes.CHANGE_CURRENT_SELECT,
      data
    }
  }
  

  export function changeCurrentView(data) {
    return {
      type: ActionTypes.CHANGE_CURRENT_VIEW,
      data
    }
  }
  

  

  export function filterHandleResult(data) {
    return {
      type: ActionTypes.FILTER_HANDLE_RESULT,
      data
    }
  }

  export function filterHandleLoad(data) {
    return {
      type: ActionTypes.FILTER_HANDLE_LOAD,
      data
    }
  }
  

  export function addperson(data) {
    return {
      type: ActionTypes.ADD_PERSON,
      data
    }
  }
  
  

  export function deleteperson(data) {
    return {
      type: ActionTypes.DELETE_PERSON,
      data
    }
  }
  

  export function addselect(data) {
    return {
      type: ActionTypes.ADD_SELECT,
      data
    }
  }
  

  export function deleteselect(data) {
    return {
      type: ActionTypes.DELETE_SELECT,
      data
    }
  }
  

  export function addDeleteselect(data) {
    return {
      type: ActionTypes.ADD_DELETE_SELECT,
      data
    }
  }
  

  export function deleteDeleteselect(data) {
    return {
      type: ActionTypes.DELETE_DELETE_SELECT,
      data
    }
  }