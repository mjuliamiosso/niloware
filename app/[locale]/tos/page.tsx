'use client';

import Navbar from '@/app/components/Navbar/Navbar';
import TermsService from '@/app/sections/TermsService/TermsService';
import './page.scss'
import React from 'react';
import Footer from '@/app/components/Footer/Footer';

const Tos: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <TermsService/>
            <Footer/>
        </div>
    );
};

export default Tos;
