'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Clients from '../../sections/Clients/Clients'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default HomePage;
