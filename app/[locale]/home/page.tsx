'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Hero from '../../sections/Hero/Hero'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Hero></Hero>
        </div>
    );
};

export default HomePage;