import * as ActionTypes from '../const/ActionType'

const init_state = {
    blocResult:[11],
    title: {
        comment: {type:'comment', title:'点评作业',description:'拥有个人点评页 可以为学生作业进行点评',person:[100001, 100005, 100003]},
        substitute:{type:'substitute',title:'带课老师',description:'拥有审核点评老师点评内容的权限,包括撤回点评,自行点评',person:[100002, 100004, 100006]}
    },
    currentView: 'comment',
    currentSelect:'',
    filterHandleResult:'',
    filterHandleLoad:'',
    selectList:[],
    deleteSelectList:[]
}
const departmentInfo = (state = init_state, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_CURRENT_SELECT: {
            return {...state,currentSelect:action.data}
        }
        case ActionTypes.CHANGE_CURRENT_VIEW: {
            return {...state,currentView:action.data}
        }
        case ActionTypes.FILTER_HANDLE_RESULT: {
            return {...state,filterHandleResult:action.data}
        }
        case ActionTypes.FILTER_HANDLE_LOAD: {
            return {...state,filterHandleLoad:action.data}
        }
        case ActionTypes.ADD_PERSON: {
            const newState={...state}
            newState.title[action.data.currentView].person=newState.title[action.data.currentView].person.concat(newState.selectList)
            newState.selectList=[]
            return newState
        }
        case ActionTypes.DELETE_PERSON: {
            const newState={...state}
            console.log(action.data)
            newState.deleteSelectList.map(item=>{
               const index= newState.title[action.data.currentView].person.indexOf(item)
               newState.title[action.data.currentView].person.splice(index,1)
            })
            newState.deleteSelectList=[]
            return newState
        }
        case ActionTypes.ADD_SELECT: {
            const newState={...state}
            newState.selectList.push(action.data)
            return newState
        }
        case ActionTypes.DELETE_SELECT: {
            const newState={...state}
            const index=newState.selectList.indexOf(action.data)
            newState.selectList.splice(index,1)
            return newState
        }
        case ActionTypes.ADD_DELETE_SELECT: {
            const newState={...state}
            newState.deleteSelectList.push(action.data)
            return newState
        }
        case ActionTypes.DELETE_DELETE_SELECT: {
            const newState={...state}
            const index=newState.deleteSelectList.indexOf(action.data)
            newState.deleteSelectList.splice(index,1)
            return newState
        }
        default:
            return state
    }
}
export default departmentInfo