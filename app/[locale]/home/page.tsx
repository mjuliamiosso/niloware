'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Hero from '../../sections/Hero/Hero'
import Services from '../../sections/Services/Services'
import Clients from '../../sections/Clients/Clients'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Hero></Hero>
            <Services></Services>
        </div>
    );
};

export default HomePage;
