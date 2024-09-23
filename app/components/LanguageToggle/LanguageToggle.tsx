'use client';

import React from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';

const languages = [
    { code: 'en-us', label: 'English (US)' },
    { code: 'pt-br', label: 'Português (BR)' },
    { code: 'es', label: 'Español' },
];

const LanguageToggle = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = params?.locale || 'en-us';

    const handleLanguageChange = (lang: string) => {
        if (lang === currentLocale) return;

        const newPathname = pathname.replace(`/${currentLocale}`, `/${lang}`);
        router.push(newPathname);
    };

    return (
        <div>
            {languages.map((language) => (
                <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    disabled={language.code === currentLocale}
                >
                    {language.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageToggle;