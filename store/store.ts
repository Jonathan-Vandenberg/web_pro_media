import { configureStore } from '@reduxjs/toolkit'
import customerIdReducer from '../slices/customerIdSlice'
import projectIdReducer from '../slices/projectIdSlice'

const store = configureStore({
  reducer: {
    customerId: customerIdReducer,
    projectId: projectIdReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store