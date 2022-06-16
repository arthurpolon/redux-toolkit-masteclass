import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { PostsState } from './types'

export const getUsers = createAsyncThunk('posts/getUser', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  await new Promise(resolve => setTimeout(resolve, 2000))

  return data
})

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { getState, rejectWithValue }) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise(resolve => setTimeout(resolve, 2000))

    return data // as string, show type inference
  } catch (err: any) {
    return rejectWithValue(err.message)
  }
})

const getUsersCases = (builder: ActionReducerMapBuilder<PostsState>) => {
  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.users = action.payload
    state.state = 'fulfilled'
  })

  builder.addCase(getUsers.pending, (state) => {
    state.state = 'pending'
  })

  builder.addCase(getUsers.rejected, (state, action) => {
    state.state = 'rejected'
    state.error = action.payload
  })
}

const getPostsCases = (builder: ActionReducerMapBuilder<PostsState>) => {
  builder.addCase(getPosts.fulfilled, (state, action) => {
    state.posts = action.payload
    state.state = 'fulfilled'
  })

  builder.addCase(getPosts.pending, (state) => {
    state.state = 'pending'
  })

  builder.addCase(getPosts.rejected, (state, action) => {
    state.state = 'rejected'
    state.error = action.payload
  })
}

const extraReducers = (builder: ActionReducerMapBuilder<PostsState>) => {
  getPostsCases(builder)
  getUsersCases(builder)
}

export default extraReducers
