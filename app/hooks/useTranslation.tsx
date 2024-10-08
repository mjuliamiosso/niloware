'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type FaqItem = {
    title: string;
    content: string;
};

type ServiceTranslation = {
    plan: string;
    description: string;
    textPrice: string;
    price: string;
    siteItems: string[];
    buttonText: string;
};

type CardTranslation = {
    title: string;
    description: string;
};

type StepTranslation = {
    title: string;
    description: string;
};

type Translations = {
    clients?: {
        title: string;
        viewAll: string;
    };
    hero?: {
        title: string;
        subtitle: string;
        cta: string;
    };
    resource?: {
        title: string;
        cards: CardTranslation[];
    };
    process?: {
        title: string;
        steps: StepTranslation[];
    };
    services?: {
        title: string;
        plans: ServiceTranslation[];
    };
    faq?: {
        title: string;
        items: FaqItem[];
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
