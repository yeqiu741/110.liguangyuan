import { DAILOG_ADD, DAILOG_MANY } from '../const/ActionTypes'

export function dailogAdd(dailogadd){
  return {
      type:DAILOG_ADD,
    dailogAdd
  }
}

export function dailogMany(idx, isCompleted){
  return {
      type:ADILOG_MANY,
    dailogMany
  }
}