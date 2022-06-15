import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/count'
import postsReducer from './slices/posts'
import usersReducer from './slices/users'

const store = configureStore({
  reducer: {
    count: countReducer,
    posts: postsReducer,
    users: usersReducer
  }
})

export default store
