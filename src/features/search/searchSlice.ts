import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store/store'

// Define a type for the slice state
interface SearchState {
  query: string
}

// Define the initial state using that type
const initialState: SearchState = {
  query: "",
}

export const searchSlice = createSlice({
  name: 'search',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    makeQuery: (state,action: PayloadAction<string>) => {
      state.query = action.payload
    },   
  },
})

export const { makeQuery } = searchSlice.actions

// export const selectquery = (state: RootState) => state.query

export default searchSlice.reducer