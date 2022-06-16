import { createSlice } from '@reduxjs/toolkit'
import extraReducers from './asyncActions'
import { PostsState } from './types'

const initialState: PostsState = {
  posts: [],
  users: [],
  state: 'idle',
  error: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers
})

export const { reset } = postsSlice.actions

export default postsSlice.reducer
