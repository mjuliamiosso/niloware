'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Hero from '../../sections/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Clients from '../../sections/Clients/Clients'
import Footer from '../../components/Footer/Footer'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Hero></Hero>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
