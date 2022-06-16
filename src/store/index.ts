import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useReduxDispatch } from 'react-redux'
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

export const useDispatch = () => useReduxDispatch<typeof store.dispatch>()

export default store
