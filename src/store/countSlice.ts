import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TCountState = {
  count: number,
  status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: TCountState = {
  count: 0,
  status: 'idle'
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

export const CountActions = countSlice.actions

export default countSlice.reducer
