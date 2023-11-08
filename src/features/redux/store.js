import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './slices/courseSlice';

export default configureStore({
  reducer: {
    courses: courseSlice,
  },
});
