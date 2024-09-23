'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Hero from '../../sections/Hero/Hero'
import Contact from '../../sections/Contact/Contact'
import Clients from '../../sections/Clients/Clients'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Hero></Hero>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;
