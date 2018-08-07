import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function notReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_REVIEW_LIST}_SUC`:
            const nrl = action.data
            return Object.assign({},state,{nrl})
        default:
            return state

    }
  }
function doneReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_REVIEW_LIST}_SUC`:
            const drl = action.data
            return Object.assign({},state,{drl})
        default:
        return state
    }
  }
function allNotReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_REVIEW_LIST}_SUC`:
            const anrl = action.data
            return Object.assign({},state,{anrl})
        default:
            return state
    }
}

function allDoneReviewList(state = {}, action) {
    switch(action.type){
        case `${ActionTypes.FETCH_REVIEW_LIST}_SUC`:
            const adrl = action.data
            return Object.assign({},state,{adrl})
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