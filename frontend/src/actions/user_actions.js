import * as ApiUtils from '../util/user_api_util'

export const UPDATE_LIKES = 'UPDATE_LIKES'

export const toggleLikeEvent = event_id => (dispatch, getState) => {
  if (!getState().session.user) return
  return ApiUtils.toggleLikeEvent(event_id).then(
    ({ data: { liked_events } }) => {
      dispatch({
        type: UPDATE_LIKES,
        liked_events: liked_events
      })
    }
  )
}
