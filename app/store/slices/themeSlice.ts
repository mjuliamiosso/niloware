import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
    darkMode: boolean
};

const initialState: ThemeState = {
    darkMode: typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'true'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem('darkMode', state.darkMode.toString());
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
            localStorage.setItem('darkMode', state.darkMode.toString());
        }
    },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;