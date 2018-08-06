import { schema } from 'normalizr';


const lessonInfo = new schema.Entity('lessonInfo', {}, {
  idAttribute: 'startTime'
});
const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})

export const LESSONINFO = [ lessonInfo ];