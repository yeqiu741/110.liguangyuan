import { ADD_MESSAGE } from '../const/ActionTypes.js';

export function message(itme){
    return{
        type: ADD_MESSAGE,
        item
    }
}