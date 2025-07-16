import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async ({ start = 0, limit = 10 }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    return response.json();
  });

  const todoslice = createSlice({
    name: 'todo',
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
      page: 0,
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTodos.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = [...state.data, ...action.payload]; // append data
          state.page += 1; // increase page count
        })
        .addCase(fetchTodos.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        });
    },
  });

export default todoslice.reducer;
