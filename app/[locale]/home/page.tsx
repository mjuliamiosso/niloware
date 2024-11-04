'use client';

import React from 'react';
import './page.scss'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Clients from '../../sections/Clients/Clients';
import Faq from '../../sections/Faq/Faq';
import Contact from '@/app/sections/Contact/Contact';
import Services from '@/app/sections/Services/Services';
import Footer from '@/app/components/Footer/Footer';
import Resource from '@/app/sections/Resource/Resource';
import Process from '@/app/sections/Process/Process';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar
                link={'Recursos'}
                ref={''}
            />
            <Hero />
            <Resource />
            <Process />
            <Clients />
            <Services />
            <Contact />
            <Faq />
            <Footer />
        </div>
    );
};

export default HomePage;