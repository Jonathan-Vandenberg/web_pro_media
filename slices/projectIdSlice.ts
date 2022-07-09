import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface ProjectIdState {
  projectId: string
}

// Define the initial state using that type
const initialState: ProjectIdState = {
  projectId: ''
}

export const projectIdSlice = createSlice({
  name: 'projectId',
  initialState: {
    value: '',
  },
  reducers: {
    projectId: (state, action: PayloadAction<string>) => {
      state.value = action.payload
      console.log(action.payload)
    },
  },
})

export const { projectId } = projectIdSlice.actions
export default projectIdSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectProjectId = (state: RootState) => state.projectId.value
