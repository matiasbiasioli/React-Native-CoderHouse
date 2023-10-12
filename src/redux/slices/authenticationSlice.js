import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    idToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIdToken: (state, action) => {
      state.IdToken = action.payload;
    },
    clearUser: (state) => {
      (state.user = null), (state.idToken = null);
    },
  },
});

export const { setUser, setIdToken, clearUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
