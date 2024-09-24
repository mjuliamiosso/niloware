'use client';

import React from 'react';
import './page.scss'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Clients from '../../sections/Clients/Clients';
import Accordion from '../../components/Accordion/Accordion';

const HomePage: React.FC = () => {
    const faqItems = [
        { title: 'What is Next.js?', content: 'Next.js is a React framework for production.' },
        { title: 'How do I use TypeScript?', content: 'You can add TypeScript by creating `.tsx` files.' },
        { title: 'What is an accordion?', content: 'An accordion is a vertically stacked list of items that can be expanded to reveal more information.' }
    ];

    return (
        <div>
            <Navbar />
            <Hero />
            <Clients />
            <section>
                <h2>Frequently Asked Questions</h2>
                <Accordion items={faqItems} />
            </section>
        </div>
    );
};

export default HomePage;
