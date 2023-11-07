import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  async (page) => {
    const endpoint = `/courses/getAll?page=${page ?? 1}`;
    try {
      const response = await apiClient.get(endpoint);
      console.log(response);
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const getCourseDetails = createAsyncThunk(
  '/getCourseDetails',
  async (id) => {
    const endpoint = `/courses/details/${id}`;
    try {
      const response = await apiClient.get(endpoint);
      console.log(response);
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const searchCourses = createAsyncThunk(
  '/searchCourses',
  async ({ searchTerm, page }) => {
    const endpoint = `/courses/search?query=${searchTerm}&page=${page ?? 1}`;

    try {
      const response = await apiClient.get(endpoint);
      console.log(response);
      return response.data;
    } catch (e) {
      return handleError(e, endpoint);
    }
  }
);

export const courseSlice = createSlice({
  name: course,
  initialState,
  reducers: {
    clearCourseDetails: (state) => {
      state.courseDetails = {};
    },
    clearState: (state) => {
      state.currentPage = 0;
      state.allCourses = [];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
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
      .addCase(getCourseDetails.pending, (state, action) => {
        state.loading = PENDING;
        state.error = null;
      })
      .addCase(getCourseDetails.fulfilled, (state, action) => {
        state.loading = IDLE;
        state.courseDetails = action.payload;
        state.error = null;
      })
      .addCase(getCourseDetails.rejected, (state, action) => {
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

export const { clearCourseDetails, clearState, setSearchTerm } =
  courseSlice.actions;
