import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    showMenu: (state)=> {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state)=> {
      state.isMenuOpen = false;
    },
  },
});

export const {showMenu, closeMenu} = appSlice.actions;

export default appSlice.reducer;