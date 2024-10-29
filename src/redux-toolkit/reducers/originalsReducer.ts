import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../constants/axios";
import { ORIGINALS_URL } from "../../constants/urls";
import { createGetDataThunk } from "../utils/getThunk";

interface IRowPost {
  originalsData: any[];
  error: string;
  loading: boolean;
}
const initialState: IRowPost = {
  originalsData: [],
  error: "",
  loading: false,
};

// API Call
export const getOriginalsData = createGetDataThunk(
  () => ORIGINALS_URL,
  "originals"
);

const originalsSlice = createSlice({
  name: "originals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOriginalsData.fulfilled, (state, action) => {
        state.loading = false;
        state.originalsData = action.payload.results;
      })
      .addCase(getOriginalsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOriginalsData.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occurred";
      });
  },
});

export default originalsSlice.reducer;
