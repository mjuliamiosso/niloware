'use client';

import React, { useState } from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { LuGlobe, LuCheck } from "react-icons/lu";
import styles from './LanguaToggle.module.scss'
import classNames from 'classnames';

const languages = [
    { code: 'en-us', label: 'English (US)' },
    { code: 'pt-br', label: 'Português (BR)' },
    { code: 'es', label: 'Español' },
];

const sortedLanguages = languages.sort((a, b) => a.label.localeCompare(b.label));

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
            <button
                className={styles.toggleButton}
                onClick={toggleMenu}>
                <LuGlobe />
            </button>
            <div className={classNames(
                styles.links,
                { [styles.open]: isOpen })
            }>
                {sortedLanguages.map((language) => (
                    <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={classNames(styles.languageOption, {
                            [styles.active]: language.code === currentLocale,
                        })}
                        disabled={language.code === currentLocale}
                    >
                        {language.label}
                        {language.code === currentLocale && <LuCheck className={styles.checkIcon} />}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageToggle;