import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface CustomerIdState {
  customerId: string
}

// Define the initial state using that type
const initialState: CustomerIdState = {
  customerId: ''
}

export const customerIdSlice = createSlice({
  name: 'customerId',
  initialState: {
    value: '',
  },
  reducers: {
    customerId: (state, action: PayloadAction<string>) => {
      state.value = action.payload
      console.log(action.payload)
    },
  },
})

export const { customerId } = customerIdSlice.actions
export default customerIdSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectCustomerId = (state: RootState) => state.customerId.value
