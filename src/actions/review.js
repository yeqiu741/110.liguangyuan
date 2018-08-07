import ActionTypes from '../const/ActionTypes'
import { normalize } from '../../node_modules/normalizr';
import * as schemes from '../schemes'

export default {
    fetchNotReviewList: (isReviewed) => {
      return {
        SERVER_API: {
          type: ActionTypes.FETCH_REVIEW_LIST,
          endpoint: '/getHomeWork',
          params: {
            isReviewed
          },
          normailzerFun:response=> normalize(response.data, schemes.NOTREVIEWLIST)
        },
      }
    },
    fetchDoneReviewList: (isReviewed) => {
    return {
          SERVER_API: {
              type: ActionTypes.FETCH_REVIEW_LIST,
              endpoint: '/getHomeWork',
              params: {
                  isReviewed
              }
          },
        }
    },
    fetchAllNotReviewList: (token) => {
        return {
          SERVER_API: {
            type: ActionTypes.FETCH_REVIEW_LIST,
            endpoint: '/getHomeWork',
            params: {
              token
            }
          },
        }
      },
      fetchAllDoneReviewList: (token) => {
        return {
          SERVER_API: {
            type: ActionTypes.FETCH_REVIEW_LIST,
            endpoint: '/getHomeWork',
            params: {
                      token
            }
          },
        }
      }
  }