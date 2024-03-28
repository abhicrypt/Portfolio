import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialValue = {
  darkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialValue,
  reducers: {
    changeMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
