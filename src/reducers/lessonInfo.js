import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function currentLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
    const {current} = action.response;
      return { ...state, [action.mid]: current.result }
    default:
      return state
  }
}
function historyLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
    const {history} = action.response;
      return { ...state, [action.mid]: history.result  }
    default:
      return state
  }
}

const lessonInfo = combineReducers({
  currentLessonsList,
  historyLessonsList
})

export default lessonInfo