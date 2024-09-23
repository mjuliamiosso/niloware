'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Hero from '../../sections/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Clients from '../../sections/Clients/Clients'
import Faq from '../../sections/Faq/Faq'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Hero></Hero>
            <Faq></Faq>
        </div>
    );
};

export default HomePage;
