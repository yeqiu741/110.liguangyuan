import { schema } from 'normalizr';


const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})
export const SATISFILEDLIST = [ satisfiled ];  




//学生课程信息
const classInfo = new schema.Entity('classInfo', {}, {
  idAttribute: 'id'
});
const teacherInfo = new schema.Entity('teacherInfo',{},{
  idAttribute:'mid'
})

const lessonInfo = new schema.Entity('lessonInfo',{
  class_info:classInfo,
  teacher_info:teacherInfo
},{
  idAttribute:'startTime'
})
export const LESSONINFO = [lessonInfo];
