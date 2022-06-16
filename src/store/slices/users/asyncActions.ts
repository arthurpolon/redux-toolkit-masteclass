import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { TRootState } from '../../types'
import { UsersState } from './types'

export const findUser = createAsyncThunk<{data: any, userId: number}, number, { state: TRootState, rejectValue: number }>('users/findUser', async (userId: number, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    const data = await res.json()

    if (data.length === 0) {
      throw new Error('User not found')
    }

    return { data: data[0], userId }
  } catch (err) {
    return rejectWithValue(123)
  }
}, {
  condition: (userId, { getState }) => {
    return !Object.keys(getState().users.users).includes(userId.toString())
  }
})

export const getUsers = createAsyncThunk('posts/getUser', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  await new Promise(resolve => setTimeout(resolve, 2000))

  return data
})

const findUserCases = (builder: ActionReducerMapBuilder<UsersState>) => {
  builder.addCase(findUser.pending, (state) => {
    state.state = 'pending'
  })

  builder.addCase(findUser.fulfilled, (state, action) => {
    state.users[action.payload.userId] = action.payload.data
    state.state = 'fulfilled'
  })

  builder.addCase(findUser.rejected, (state, action) => {
    state.state = 'rejected'
    // const error = action.payload || number | undefined
  })
}

const extraReducers = (builder: ActionReducerMapBuilder<UsersState>) => {
  findUserCases(builder)
}

export default extraReducers
