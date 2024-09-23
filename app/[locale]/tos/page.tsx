'use client';

import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Tos: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <h1>{translations.home?.welcome}</h1>
            <p>{translations.home?.language}</p>
        </div>
    );
};

export default Tos;
