import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <h3>
                        Niloware
                    </h3>
                    <div className={styles.socials}>
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaInstagram />
                        </a>
                        <a href="">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.links}>
                        <a href="">
                            Termos de Uso
                        </a>
                        <a href="">
                            Políticas de Privacidade
                        </a>
                    </div>
                    <div className={styles.copyright}>
                        <p>
                            ™ & © 2024 Niloware, Ltd. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer