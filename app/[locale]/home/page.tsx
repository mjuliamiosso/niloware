'use client';

import React from 'react';
import './page.scss'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Clients from '../../sections/Clients/Clients';
import Faq from '../../sections/Faq/Faq';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Clients />
            <Faq />
        </div>
    );
};

export default HomePage;
