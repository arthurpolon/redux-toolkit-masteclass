import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/count'
import postsReducer from './slices/posts'

const store = configureStore({
  reducer: {
    count: countReducer,
    posts: postsReducer
  }
})

export default store
