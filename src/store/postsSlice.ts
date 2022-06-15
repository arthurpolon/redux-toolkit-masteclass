import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type PostsState = {
  posts: Array<{id: number, userId: number, title: string, body: string}>,
  state: 'idle' | 'loading' | 'success' | 'error',
  users: Array<{id: number, name: string, username: string, email: string}>,
  error: any
}

const initialState: PostsState = {
  posts: [],
  state: 'idle',
  users: [],
  error: null
}

export const getUsers = createAsyncThunk('posts/getUser', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  await new Promise(resolve => setTimeout(resolve, 2000))

  return data
})

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise(resolve => setTimeout(resolve, 2000))

    return data
  } catch (err: any) {
    return rejectWithValue(err.message)
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.state = 'success'
    })

    builder.addCase(getPosts.pending, (state) => {
      state.state = 'loading'
    })

    builder.addCase(getPosts.rejected, (state, action) => {
      state.state = 'error'
      state.error = action.payload
    })

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.state = 'success'
    })

    builder.addCase(getUsers.pending, (state) => {
      state.state = 'loading'
    })

    builder.addCase(getUsers.rejected, (state, action) => {
      state.state = 'error'
      state.error = action.payload
    })
  }
})

export const { reset } = postsSlice.actions

export default postsSlice.reducer
