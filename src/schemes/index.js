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

const student = new schema.Entity('students',{},{
  idAttribute:'mid'
})


const lesson = new schema.Entity('lessons',{
  classInfo: classes,
  teacherInfo: teacher
},{
  idAttribute: 'id'
})


// const notReviewList = new schema.Entity('notReviewList',{},{
//   idAttribute:'id'
// })

// const doneReviewList = new schema.Entity('doneReviewList',{},{
//   idAttribute:'id'
// })
// const allNotReviewList = new schema.Entity('allNotReviewList',{},{
//   idAttribute:'id'
// })
// const allDoneReviewList = new schema.Entity('allDoneReviewList',{},{
//   idAttribute:'id'
// })

// export const NOTREVIEWLIST = [ notReviewList ];
// export const DONEREVIEWLIST = [ doneReviewList ];
// export const ALLNOTREVIEWLIST = [ allNotReviewList ];
// export const ALLDONEREVIEWLIST = [ allDoneReviewList ];
export const LESSONS = [ lesson ];
export const STUDENTLIST = [student];
export const SATISFILEDLIST = [ satisfiled ];