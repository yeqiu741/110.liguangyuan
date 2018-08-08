import ActionTypes from '../const/ActionTypes'
// import { normalize } from '../../node_modules/normalizr';
// import * as schemes from '../schemes'

export default {
  fetchNotReviewList: (token,isReviewed) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_NOTREVIEW_LIST,
        endpoint: '/getHomeWork',
        params: {
          token,
          isReviewed
        },
        // normailzerFun: response=> normalize(response.data, schemes.NOTREVIEWLIST)
      },
    }
  },
  fetchDoneReviewList: (token,isReviewed) => {
    return {
          SERVER_API: {
              type: ActionTypes.FETCH_DONEREVIEW_LIST,
              endpoint: '/getHomeWork',
              params: {
                token,
                isReviewed
              },
              // normailzerFun: response=> normalize(response.data, schemes.DONEREVIEWLIST)
          },
        }
    },
  fetchAllNotReviewList: (token,isReviewed) => {
      return {
        SERVER_API: {
          type: ActionTypes.FETCH_ALLNOTREVIEW_LIST,
          endpoint: '/getHomeWork',
          params: {
            token,
          isReviewed            
          },
          // normailzerFun: response=> normalize(response.data, schemes.ALLNOTREVIEWLIST)
        },
      }
    },
    fetchAllDoneReviewList: (token,isReviewed) => {
      return {
        SERVER_API: {
          type: ActionTypes.FETCH_ALLDONEREVIEW_LIST,
          endpoint: '/getHomeWork',
          params: {
            token,
          isReviewed
          },
          // normailzerFun: response=> normalize(response.data, schemes.ALLDONEREVIEWLIST)
        },
      }
    }
}