import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function notReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_NOTREVIEW_LIST}_SUC`:
        const result = action.response;
        return result 
        /*
        case `${A}`
        */
        default:
            return state
    }
  }
function doneReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_DONEREVIEW_LIST}_SUC`:
        const result = action.response;
        return result 
        default:
        return state
    }
  }
function allNotReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_ALLNOTREVIEW_LIST}_SUC`:
        const result = action.response;
        return result 
        default:
            return state
    }
}

function allDoneReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_ALLDONEREVIEW_LIST}_SUC`:
        const result = action.response;
        return result 
        default:
            return state
    }
}



const review = combineReducers({
    notReviewList,
    doneReviewList,
    allNotReviewList,
    allDoneReviewList
})
  
export default review