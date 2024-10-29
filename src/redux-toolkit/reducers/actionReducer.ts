import { createSlice } from "@reduxjs/toolkit";

import { ACTIONS_URL } from "../../constants/urls";
import { createGetDataThunk } from "../utils/getThunk";

interface IActionPost {
  actionData: any[];
  error: string;
  loading: boolean;
}

const initialState: IActionPost = {
  actionData: [],
  error: "",
  loading: false,
};

// export const getActionData = createGetDataThunk(ACTIONS_URL, "actions");
export const getActionData = createGetDataThunk(() => ACTIONS_URL, "actions");

const actionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActionData.fulfilled, (state, action) => {
        state.loading = false;
        state.actionData = action.payload.results;
      })
      .addCase(getActionData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActionData.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occurred";
      });
  },
});

export default actionsSlice.reducer;
