'use client';

import Navbar from '@/app/components/Navbar/Navbar';
import PrivacyPolicy from '@/app/sections/PrivacyPolicy/PrivacyPolicy';
import './page.scss'
import React from 'react';
import Footer from '@/app/components/Footer/Footer';

const Tos: React.FC = () => {
    return (
        <div>
            <Navbar />
            <PrivacyPolicy/>
            <Footer />
        </div>
    );
};

export default Tos;
