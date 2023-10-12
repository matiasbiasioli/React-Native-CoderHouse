import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import {api_data} from '../services/api_data'
import authenticationSlice from "./slices/authenticationSlice";

export const store = configureStore({
  reducer: {
    homeSlice,
    [api_data.reducerPath]: api_data.reducer,
    authenticationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api_data.middleware),
});
