import { createSlice } from "@reduxjs/toolkit";

import { HORROR_URL } from "../../constants/urls";
import { createGetDataThunk } from "../utils/getThunk";

interface IHorrorPost {
  horrorData: any[];
  error: string;
  loading: boolean;
}

const initialState: IHorrorPost = {
  horrorData: [],
  error: "",
  loading: false,
};

export const getHorrorData = createGetDataThunk(() => HORROR_URL, "horror");

const horrorSlice = createSlice({
  name: "horror",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHorrorData.fulfilled, (state, action) => {
        state.loading = false;
        state.horrorData = action.payload.results;
      })
      .addCase(getHorrorData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHorrorData.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occurred";
      });
  },
});

export default horrorSlice.reducer;
