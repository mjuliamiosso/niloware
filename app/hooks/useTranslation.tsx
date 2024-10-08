'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Translations = {
    clients?: {
        title: string;
        viewAll: string;
    };
};

export const useTranslation = () => {
    const [translations, setTranslations] = useState<Translations>({});
    const params = useParams();
    const localeParam = params?.locale;

    const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam || 'en-us';

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const res = await fetch(`/locales/${locale}/translation.json`);
                if (!res.ok) {
                    throw new Error('Translation file not found');
                }
                const data = await res.json();
                setTranslations(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadTranslations();
    }, [locale]);

    return translations;
};
