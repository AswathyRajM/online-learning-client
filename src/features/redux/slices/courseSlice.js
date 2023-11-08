import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { CONSTANTS } from '../constants';
import apiClient from '../../endpoint/axiosClient';
import { handleError } from '../../util/handleApiError';

const { PENDING, IDLE } = CONSTANTS;

const initialState = {
  loading: IDLE,
  allCourses: [],
  courseDetails: {},
  error: null,
};

export const fetchAllCourses = createAsyncThunk(
  '/fetchAllCourses',
  async () => {
    const endpoint = `/api/course/all`;
    try {
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const searchCourses = createAsyncThunk(
  '/searchCourses',
  async (term) => {
    const endpoint = `/api/course/search?query=${term}`;

    try {
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    clearCourseDetails: (state) => {
      state.courseDetails = {};
    },
    clearState: (state) => {
      state.allCourses = state.tempCourses;
      state.tempCourses = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state, action) => {
        state.loading = PENDING;
        state.error = null;
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.allCourses = action.payload;
        state.error = null;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.loading = IDLE;
        state.error = action.error.message;
      })
      .addCase(searchCourses.pending, (state, action) => {
        state.loading = PENDING;
        state.error = null;
      })
      .addCase(searchCourses.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.allCourses = action.payload;
        state.error = null;
      })
      .addCase(searchCourses.rejected, (state, action) => {
        state.loading = IDLE;
        state.error = action.error.message;
      });
  },
});

export const { clearCourseDetails, clearState } = courseSlice.actions;

export default courseSlice.reducer;
