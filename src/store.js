import { configureStore } from '@reduxjs/toolkit'
import wrapperSlice from './components/Wrapper/wrapperSlice'

export default configureStore({
  reducer: {
    wrapper: wrapperSlice
  },
})