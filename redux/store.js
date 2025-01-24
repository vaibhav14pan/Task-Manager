import { configureStore } from '@reduxjs/toolkit'
import textReducer from '../features/textSlice'
import buttonTextReducer from '../features/buttonTextSlice'
import taskReducer from '../features/taskSlice'
export default configureStore({
  reducer: {
    inputText:textReducer,
    buttonText:buttonTextReducer,
    task:taskReducer,
  }
})