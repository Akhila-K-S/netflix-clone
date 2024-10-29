import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BANNER_URL } from "../../constants/urls";
import { createGetDataThunk } from "../utils/getThunk";

// Define types for the initial state
interface IBanner {
  bannerData: any[];
  error: string;
  loading: boolean;
}

// Define a type for the API response
interface BannerData {
  results: any[];
}

// Define the initial state with the BannerState interface
const initialState: IBanner = {
  bannerData: [],
  error: "",
  loading: false,
};

// Create async thunk for fetching banner data with a typed response
export const getBannerData = createGetDataThunk(() => BANNER_URL, "banner");

// Create slice with type-safe reducers
const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getBannerData.fulfilled,
        (state, action: PayloadAction<BannerData>) => {
          state.loading = false;
          state.bannerData = action.payload.results;
        }
      )
      .addCase(getBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBannerData.rejected, (state) => {
        state.loading = false;
        state.error = "Some error occurred";
      });
  },
});

export default bannerSlice.reducer;
