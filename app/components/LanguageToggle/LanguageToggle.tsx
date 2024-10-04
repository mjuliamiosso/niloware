'use client';

import React, { useState } from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { LuGlobe } from "react-icons/lu";
import styles from './LanguaToggle.module.scss'
import Link from 'next/link';
import classNames from 'classnames';

const languages = [
    { code: 'en-us', label: 'English (US)' },
    { code: 'pt-br', label: 'Português (BR)' },
    { code: 'es', label: 'Español' },
];

const LanguageToggle = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = params?.locale || 'en-us';

    const handleLanguageChange = (lang: string) => {
        if (lang === currentLocale) return;

        const newPathname = pathname.replace(`/${currentLocale}`, `/${lang}`);
        router.push(newPathname);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* {languages.map((language) => (
                <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    disabled={language.code === currentLocale}
                >
                    {language.label}
                </button>
            ))} */}
            <button
                className={styles.toggleButton}
                onClick={toggleMenu}>
                <LuGlobe />
            </button>
            <div className={classNames(
                styles.links,
                { [styles.open]: isOpen })
            }>
                <Link
                    href={''}>
                    English (US)
                </Link>
                <Link
                    href={''}>
                    Português (BR)
                </Link>
                <Link
                    href={''}>
                    Español
                </Link>
            </div>
        </div>
    );
};

export default LanguageToggle;