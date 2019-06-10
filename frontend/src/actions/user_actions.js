import * as ApiUtils from '../util/user_api_util'
import { showSignInErrorModal } from './signin_error_modal_actions'

export const UPDATE_LIKES = 'UPDATE_LIKES'

export const toggleLikeEvent = event_id => (dispatch, getState) => {
  if (!getState().session.isAuthenticated) {
    dispatch(
      showSignInErrorModal(
        "You'll have to sign in or register before you can like events"
      )
    )
    return
  }
  return ApiUtils.toggleLikeEvent(event_id).then(
    ({ data: { liked_events } }) => {
      dispatch({
        type: UPDATE_LIKES,
        liked_events: liked_events
      })
    }
  )
}
