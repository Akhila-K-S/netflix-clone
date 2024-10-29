// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../constants/axios";

// // Reusable function to create thunks
// export const createGetDataThunk = (url: string, sliceName: string) => {
//   return createAsyncThunk(`${sliceName}/fetchData`, async () => {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       throw new Error("Failed to fetch data");
//     }
//   });
// };

// utils/getThunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../constants/axios";

// Define the parameter types for dynamic URL functions
type UrlFunction = (params?: any) => string;

// Reusable function to create thunks with optional URL parameters
export const createGetDataThunk = (
  urlFunction: UrlFunction,
  sliceName: string
) => {
  return createAsyncThunk(`${sliceName}/fetchData`, async (params?: any) => {
    try {
      const url = urlFunction(params); // Generate URL with or without params
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  });
};
