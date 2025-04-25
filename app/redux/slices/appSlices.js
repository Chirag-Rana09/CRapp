// src/redux/features/user/appSlices.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  password: '',
  email: '',
  walkthroughBool: false,
  language: 'en',
};

const appSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.password = action.payload.password;
      state.email = action.payload.email;
    },
    clearUserData: state => {
      state.password = '';
      state.email = '';
    },
    setWalkthroughBool: (state, action) => {
      state.walkthroughBool = action.payload.walkthroughBool;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    logout: () => initialState, // ✅ Reset everything on logout
  },
});

export const {
  setUserData,
  clearUserData,
  setWalkthroughBool,
  setLanguage,
  logout,
} = appSlices.actions;
export default appSlices.reducer;
