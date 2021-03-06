import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { TRootState } from '../../types'
import { TCountState } from './types'

export const asyncIncrement = createAsyncThunk<number, number, { state: TRootState }>('count/asyncIncrement', async (amount: number) => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return amount
}, {
  condition: (_, { getState }) => {
    const { count } = getState()

    if (count.status === 'pending') {
      return false
    }
  }
})

const asyncIncrementCases = (builder: ActionReducerMapBuilder<TCountState>) => {
  builder.addCase(asyncIncrement.pending, (state) => {
    state.status = 'pending'
  })

  builder.addCase(asyncIncrement.fulfilled, (state, action) => {
    state.count += action.payload
    state.status = 'fulfilled'
  })
}

const extraReducers = (builder: ActionReducerMapBuilder<TCountState>) => {
  asyncIncrementCases(builder)
}

export default extraReducers
