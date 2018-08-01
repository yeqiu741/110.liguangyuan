import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes'
export function fetchlesson( next ) {
  next({
    type: ActionTypes.FETCH_LESSONINFO_REQ
  });
  
  axios({
      method: 'POST',
      url: `http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data:{
        mid:'001'
      }
    }).then(res => {
      next({
        type: ActionTypes.FETCH_LESSONINFO_SUC,
        data: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: ActionTypes.FETCH_LESSONINFO_FAI
      });
    });
  }

 export function fetchuser( next ) {
      next({
        type: ActionTypes.FETCH_USERINFO_REQ
      });
      axios({
        method: 'post',
        url: ` http://xly-wkop.xiaoniangao.cn/getUserInfo`,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:{
          mid:'001'
        }
      })
    .then(res =>  {
      console.log(res);
      next({
        type: ActionTypes.FETCH_USERINFO_SUC,
        data: res.data.data
      });
    })
    .catch( err => {
      console.log(err);
      next({
        type: ActionTypes.FETCH_USERINFO_FAI,
      });
    });
  }

  export function fetchsmsg( next ) {
    next({
      type: ActionTypes.FETCH_SMSG_REQ
    });
    axios({
      method: 'post',
      url: `  http://xly-wkop.xiaoniangao.cn/getStudentList`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data:{
        mid:'001'
      }
    })
  .then(res =>  {
    console.log(res);
    next({
      type: ActionTypes.FETCH_SMSG_SUC,
      data: res.data.data
    });
    console.log(res.data.data)
  })
  .catch( err => {
    console.log(err);
    next({
      type: ActionTypes.FETCH_SMSG_FAI,
    });
  });
}

export function fetchcds( next ) {
  next({
    type: ActionTypes.FETCH_CDS_REQ
  });
  axios({
    method: 'post',
    url: `http://xly-wkop.xiaoniangao.cn/getClassInfo`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data:{
      id:1
    }
  })
.then(res =>  {
  console.log(res);
  next({
    type: ActionTypes.FETCH_CDS_SUC,
    data: res.data.data
  });
  console.log(res.data.data)
})
.catch( err => {
  console.log(err);
  next({
    type: ActionTypes.FETCH_CDS_FAI,
  });
});
}





