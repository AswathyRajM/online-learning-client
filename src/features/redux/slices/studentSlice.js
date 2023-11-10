import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CONSTANTS } from '../constants';
import apiClient from '../../endpoint/axiosClient';
import { handleError } from '../../util/handleApiError';

const { PENDING, IDLE } = CONSTANTS;

const initialState = {
  loading: IDLE,
  studentDetails: {},
  error: null,
};

export const fetchCourseDetails = createAsyncThunk(
  '/fetchCourseDetails',
  async () => {
    const endpoint = `/api/student/course/all`;
    try {
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const updateCourseStatus = createAsyncThunk(
  '/updateCourseStatus',
  async (data, { dispatch }) => {
    const endpoint = `/api/student/course`;
    try {
      const response = await apiClient.patch(endpoint, data);
      dispatch(fetchCourseDetails());
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const studentSlice = createSlice({
  name: 'students',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseDetails.pending, (state, action) => {
        state.loading = PENDING;
        state.error = null;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.studentDetails = action.payload;
        state.error = null;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = IDLE;
        state.error = action.error.message;
      })
      .addCase(updateCourseStatus.pending, (state, action) => {
        state.loading = PENDING;
        state.error = null;
      })
      .addCase(updateCourseStatus.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.error = null;
      })
      .addCase(updateCourseStatus.rejected, (state, action) => {
        state.loading = IDLE;
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;
