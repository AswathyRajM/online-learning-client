import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './slices/courseSlice';
import studentSlice from './slices/studentSlice';

export default configureStore({
  reducer: {
    courses: courseSlice,
    students: studentSlice,
  },
});
