'use client';

import React from 'react';
import './page.scss'
import { useTranslation } from '../../hooks/useTranslation';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Services from '../../sections/Services/Services'
import Clients from '../../sections/Clients/Clients'
import Footer from '../../components/Footer/Footer'

const HomePage: React.FC = () => {
    const translations = useTranslation();

    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
