import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TStore } from '../../types'
import { UsersState } from './types'

const initialState: UsersState = {
  users: {},
  state: 'idle'
}

export const findUser = createAsyncThunk<{data: any, userId: number}, number, { state: TStore }>('users/findUser', async (userId: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  const data = await res.json()

  return { data: data[0], userId }
}, {
  condition: (userId, { getState }) => {
    return !Object.keys(getState().users.users).includes(userId.toString())
  }
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(findUser.pending, (state) => {
      state.state = 'pending'
    })

    builder.addCase(findUser.fulfilled, (state, action) => {
      state.users[action.payload.userId] = action.payload.data
      state.state = 'fulfilled'
    })

    builder.addCase(findUser.rejected, (state) => {
      state.state = 'rejected'
    })
  }
})

export default usersSlice.reducer
