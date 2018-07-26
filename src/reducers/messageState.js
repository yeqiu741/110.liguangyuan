import { ADD_ITEM } from '../const/ActionTypes'
const icon0 = require('../IMG/0.jpg');
const icon1 = require('../IMG/1.jpg');
const icon2 = require('../IMG/2.jpg');
const icon3 = require('../IMG/3.jpg');
const icon4 = require('../IMG/4.jpg');
const icon5 = require('../IMG/5.jpg');

const init_List = {
  messageBox:[ 
      {
        icon : icon0,
        name : '珊儿',
        description : '想我了没QAQ。',
        time : '8：00' ,
        button : '更多'
      },
      {
        icon : icon1,
        name : '小年糕*石磊',
        description : '去上厕所不？',
        time : '13：19', 
        button : '更多'
    },
      {
      icon : icon2,
      name : '叶秋',
      description : '走，KTV走一波？',
      time : '14：39' , 
      button : '更多'
    },
    {
      icon : icon3,
      name : '王伟',
      description : '你干啥呢？',
      time : '15：10', 
      button : '更多' 
    },
    {
      icon : icon4,
      name : '知你故来风',
      description : '兄弟，明天记得交作业',
      time : '18：59' , 
      button : '更多'
    },
    {
      icon : icon5,
      name : '小妹',
      description : '哥，回家吃饭了。',
      time : '19：30' , 
      button : '更多'
    }
  ],

}

export default function weChat(state = init_List,action){
    switch(action.type){
      case ADD_ITEM:{
        const newState = {...state}
        const newmessage = state.messageBox.slice();
        newmessage.unshift(action.item)
        newState.messageBox = newmessage;
        return newState;
      }
      default:
      return state;
    }
  }
