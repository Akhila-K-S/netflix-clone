// reducers/videoReducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { GET_VIDEO_KEY } from "../../constants/urls";
import { createGetDataThunk } from "../utils/getThunk";

interface IVideoState {
  videoData: any[];
  error: string;
  loading: boolean;
}

const initialState: IVideoState = {
  videoData: [],
  error: "",
  loading: false,
};

// Pass `GET_VIDEO_KEY` function to `createGetDataThunk`
export const getVideoData = createGetDataThunk(
  (movie_id) => GET_VIDEO_KEY(movie_id),
  "videos"
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoData.fulfilled, (state, action) => {
        state.loading = false;
        state.videoData = action.payload.results;
      })
      .addCase(getVideoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVideoData.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occurred";
      });
  },
});

export default videoSlice.reducer;
