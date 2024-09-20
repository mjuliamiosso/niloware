import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/languageSlice';
import { RootState } from '../../store/store';

const languages = [
    { code: 'en-us', label: 'English (US)' },
    { code: 'pt-br', label: 'Português (BR)' },
    { code: 'es', label: 'Español' }
];

const LanguageToggle = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.language.language);

    const handleLanguageChange = (lang: string) => {
        dispatch(setLanguage(lang as 'en-us' | 'pt-br' | 'es'));
    };

    return (
        <div>
            {languages.map((language) => (
                <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    disabled={currentLanguage === language.code}
                >
                    {language.label}
                </button>
            ))}
        </div>
    )
}

export default LanguageToggle;