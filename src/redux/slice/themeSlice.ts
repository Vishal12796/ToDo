import { createSlice } from '@reduxjs/toolkit';

export enum ThemeMode {
  light = 'light',
  dark = 'dark',
  systemBased = 'systemBased',
}

export type ThemeUpdateAction = {
  type: string;
  payload: ThemeMode;
};

type ThemeSliceState = {
  themeMode: ThemeMode;
};

const initialState: ThemeSliceState = {
  themeMode: ThemeMode.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    updateThemeState: (state: ThemeSliceState, action: ThemeUpdateAction) => {
      state.themeMode = action.payload;
    },
    triggerThemeUpdate: (state: ThemeSliceState, action: ThemeUpdateAction) => {},
  },
});

export const { updateThemeState, triggerThemeUpdate } = themeSlice.actions;

export default themeSlice.reducer;
