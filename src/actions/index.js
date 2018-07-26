import { ADD_ITEM,DAILOG_ADD } from '../const/ActionTypes'

export function dailog(dailog){
   return{
       type:DAILOG_ADD,
       dailog
   }
 }
export function addItem(item){
  return{
    type:ADD_ITEM,
    item
  }
}

