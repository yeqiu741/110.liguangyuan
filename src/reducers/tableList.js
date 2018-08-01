import * as ActionTypes from '../const/ActionTypes'

const initState = {
    LessonsList:[],
    historyLessonsList:[]
}

export default function tableList(state = initState, action){
    switch(action.type){
        case ActionTypes.FETCH_LESSONINFO_SUC:
            const LessonsList = action.data.currentLessonsList;
            const historyLessonsList = action.data.historyLessonsList;
        return Object.assign({},state,{LessonsList,historyLessonsList})
    default:
        return state;
    }
}