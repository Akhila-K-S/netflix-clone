import { createSlice } from "@reduxjs/toolkit";
import { ROMANTIC_URL } from "../../constants/urls";
import { createGetDataThunk } from "../utils/getThunk";

interface IRomanticPost {
  romanticData: any[];
  error: string;
  loading: boolean;
}

const initialState: IRomanticPost = {
  romanticData: [],
  error: "",
  loading: false,
};

export const getRomanticData = createGetDataThunk(
  () => ROMANTIC_URL,
  "romantic"
);

const romanticSlice = createSlice({
  name: "romantic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRomanticData.fulfilled, (state, action) => {
        state.loading = false;
        state.romanticData = action.payload.results;
      })
      .addCase(getRomanticData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRomanticData.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occurred";
      });
  },
});

export default romanticSlice.reducer;
