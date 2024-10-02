import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'
import classNames from 'classnames';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={classNames(styles['footer-container'], 'container')}>
                <div className={styles['footer-logo']}>
                    <h3>Niloware</h3>
                    <div className={styles['footer-social']}>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaXTwitter /></a>
                    </div>
                </div>
                <div className={styles['footer-privacy']}>
                    <div className={styles['footer-privacy-container']}>
                        <a href="/[locale]/tos">Termos de Serviço</a>
                        <a href="/[locale]/privacy">Política de Privacidade</a>
                    </div>
                    <div className={styles['footer-copyright']}>
                        <p>™ & © 2024 Niloware, Ltd. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer