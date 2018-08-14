import * as ActionTypes from '../const/ActionType';
import { combineReducers } from 'redux'
// const init_list={
//     1:{
//         id:1,
//         title:'所有部门',
//         department:[11]
//     },
//         11:{
//             id:11,
//             title:'爱启迪集团',
//             department:[111],
//         },
//             111:{
//                 id:111,
//                 title:'广州分公司',
//                 department:[1111,1112,1113,1114],
//             },
//                 1111:{
//                     id:1111,
//                     title:'总经办',
//                     department:[11111,11112,11113],
//                 },
//                         11111:{
//                             id:11121,
//                             title:'总经办一组',
//                         },
//                         11112:{
//                             id:11122,
//                             title:'总经办二组',
//                         },
//                 1112:{
//                     id:1112,
//                     title:'财务部',
//                     department:[11121,11122,11123],
                   
//                 },
//                         11121:{
//                             id:11121,
//                             title:'财务一组',
//                         },
//                         11122:{
//                             id:11122,
//                             title:'财务二组',
//                         },
//                 1113:{
//                     id:1113,
//                     title:'工程部',
//                     department:[11131,11132,11133],
//                     person:[]
//                 },
//                         11131:{
//                             id:11131,
//                             title:'工程部一组',
//                         },
//                         11132:{
//                             id:11132,
//                             title:'工程部二组', 
//                         },
//                         11133:{
//                             id:11133,
//                             title:'工程部三组',
//                         },
//                 1114:{
//                     id:1114,
//                     title:'产品研发部',
//                     department:[11141,11142,11143],
//                     person:[]
//                 },
//                         11141:{
//                             id:11141,
//                             title:'产品一组',
//                             person:[10001,10002,10003]
//                         },
//                         11142:{
//                             id:11142,
//                             title:'产品二组',
//                             person:[10004,10005,10006]
//                         },
//                         11143:{
//                             id:11143,
//                             title:'产品三组',
//                             person:[10006,10007,10008]
//                         },
//     10001:{
//         id:10001,name: '红帆', mid: 10001,comment:1,substitute:0
//     },  
//     10002:{
//         id:10001,name: '橙帆', mid: 10002,comment:0,substitute:1
//     }, 
//     10003:{
//         id:10001,name: '黄帆', mid: 10003,comment:1,substitute:0
//     }, 
//     10004:{
//         id:10001,name: '绿帆', mid: 10004,comment:0,substitute:1
//     }, 
//     10005:{
//         id:10001,name: '蓝帆', mid: 10005,comment:1,substitute:0
//     }, 
//     10006:{
//         id:10001,name: '靛帆', mid: 10006,comment:0,substitute:1
//     }, 
//     10007:{
//         id:10001,name: '紫帆', mid: 10007,comment:1,substitute:0
//     }, 
//     10008:{
//         id:10001,name: '白帆', mid: 10008,comment:0,substitute:1
//     },   
// }
// function treeData(state=init_list,action){
//     switch(action.type){
//         case ActionTypes.ADD_PERSON: {
//             const newState={...state}
//             action.data.selectList.map((item)=>{
//                 newState[item][action.data.currentView]=1
//             })
//             return newState
//         }
//         case ActionTypes.DELETE_PERSON: {
//             const newState={...state}
//             console.log(action.data)
//             action.data.deleteSelectList.map((item)=>{
//                 newState[item][action.data.currentView]=0
//             })
//             return newState
//         }
//         default:
//             return state
//     }
// }



function aiQiDi(state = {
    11: { id:101,name: '爱奇迪集团', guangZhou: [101] }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function guangZhou(state = {
    101: { id:101,name: '广州分公司', department: [1001, 1002, 1003, 1004] }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function department(state = {
    1001: { id:1001,name: '总经办' },
    1002: { id:1002,name: '财务部' },
    1003: { id:1003,name: '工程部' },
    1004: { id:1004,name: '产品研发部', itemGroup: [10001, 10002, 10003] },
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function itemGroup(state = {
    10001: { id:10001,name: '开发一组', person: [100001, 100002, 100003,100006,100005] },
    10002: { id:10002,name: '开发二组', person: [100001, 100005, 100006,100009] },
    10003: { id:10003,name: '测试组', person: [100001, 100004, 100003,100007,100008] },
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function person(state = {
    100001: { id:100001,name: '赤帆', mid: 100001,comment:1,substitute:0},
    100002: { id:100002,name: '橙帆', mid: 100002,comment:0,substitute:1},
    100003: { id:100003,name: '黄帆', mid: 100003,comment:1,substitute:0},
    100004: { id:100004,name: '绿帆', mid: 100004,comment:0,substitute:1},
    100005: { id:100005,name: '蓝帆', mid: 100005,comment:1,substitute:0},
    100006: { id:100006,name: '靛帆', mid: 100006,comment:0,substitute:1},
    100007: { id:100007,name: '紫帆', mid: 100007,comment:1,substitute:0},
    100008: { id:100008,name: '黑帆', mid: 100008,comment:0 ,substitute:1},
    100009: { id:100009,name: '白帆', mid: 100009,comment:1,substitute:0},
}, action) {
    switch (action.type) {
        case ActionTypes.ADD_PERSON: {
            const newState={...state}
            action.data.selectList.map((item)=>{
                newState[item][action.data.currentView]=1
            })
            return newState
        }
        case ActionTypes.DELETE_PERSON: {
            const newState={...state}
            console.log(action.data)
            action.data.deleteSelectList.map((item)=>{
                newState[item][action.data.currentView]=0
            })
            return newState
        }
        default:
            return state
    }
}
export default combineReducers({
    aiQiDi,
    guangZhou,
    department,
    itemGroup,
    person,
})