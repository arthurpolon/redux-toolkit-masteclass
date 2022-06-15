import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TCountState = {
  count: number
}

const initialState: TCountState = {
  count: 0
}

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
  }
})

export const { decrement, increment } = countSlice.actions

export default countSlice.reducer
