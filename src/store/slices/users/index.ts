import { createSlice } from '@reduxjs/toolkit'
import extraReducers from './asyncActions'

import { UsersState } from './types'

const initialState: UsersState = {
  users: {},
  state: 'idle'
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers
})

export default usersSlice.reducer
