'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/languageSlice';
import { RootState } from '../../store/store';
import { useRouter } from 'next/router';

const languages = [
    { code: 'en-us', label: 'English (US)' },
    { code: 'pt-br', label: 'Português (BR)' },
    { code: 'es', label: 'Español' }
];

const LanguageToggle = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.language.language);
    const router = useRouter();

    const handleLanguageChange = (lang: string) => {
        dispatch(setLanguage(lang));
        router.push(router.pathname, router.asPath, { locale: lang });
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