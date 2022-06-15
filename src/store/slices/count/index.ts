import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import extraReducers from './asyncAction'
import { TCountState } from './types'

const initialState = {
  count: 0
} as TCountState

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload
    }
  },
  extraReducers
})

export const { decrement, increment } = countSlice.actions

export default countSlice.reducer
