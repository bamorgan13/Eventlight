import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../reducers/root_reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (preloadedState = {}) => {
  if (process.env.NODE_ENV === 'production') {
    createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(thunk))
    )
  } else {
      createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(thunk, logger))
      )
  }
}
export default configureStore
