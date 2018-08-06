import { schema } from 'normalizr';


const mid = new schema.Entity('mid', {}, {
  idAttribute: 'mid'
});
const studentList = new schema.Entity('studentList',{
  mid_info:mid,
},{
  idAttribute:'mid'
})

export const STUDENTLIST = [ studentList ];