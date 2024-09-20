import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
    language: 'en-us' | 'pt-br' | 'es';
}

const initialState: LanguageState = {
    language: 'en-us'
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<'en-us' | 'pt-br' | 'es'>) => {
            state.language = action.payload;
            localStorage.setItem('language', action.payload);
        }
    }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;