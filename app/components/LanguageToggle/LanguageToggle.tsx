import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/languageSlice';
import { RootState } from '../../store/store';

const LanguageToggle = () => {
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);

    const handleLanguageChange = (lang: 'en' | 'pt') => {
        dispatch(setLanguage(lang));
    };

    return (
        <div>
            <button onClick={() => handleLanguageChange('en')} disabled={language === 'en'}>
                English
            </button>
            <button onClick={() => handleLanguageChange('pt')} disabled={language === 'pt'}>
                Português
            </button>
        </div>
    )
}

export default LanguageToggle;