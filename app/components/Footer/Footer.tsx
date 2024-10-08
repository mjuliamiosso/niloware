import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';

const Footer = () => {
    const params = useParams();
    const locale = params.locale;
    const { footer } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <h3>
                        Niloware
                    </h3>
                    <div className={styles.socials}>
                        <Link href="">
                            <FaFacebook />
                        </Link>
                        <Link href="">
                            <FaInstagram />
                        </Link>
                        <Link href="">
                            <FaXTwitter />
                        </Link>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.links}>
                        <Link href={`/${locale}/tos`}>
                            {footer?.tos}
                        </Link>
                        <Link href={`/${locale}/privacy`}>
                            {footer?.privacy}
                        </Link>
                    </div>
                    <div className={styles.copyright}>
                        <p>
                            {footer?.copyright}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer