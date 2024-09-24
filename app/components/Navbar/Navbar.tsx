import React, { useState } from 'react';
import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { IoMdMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
        <div className={classNames(styles['navbar-container'], 'container')}>
            <h3>Nilo<span>ware</span></h3>
            <div className={classNames(styles['navbar-links'], { [styles.open]: isOpen })}>
                <a href="">Recursos</a>
                <a href="">Processos</a>
                <a href="">Clientes</a>
                <a href="">Serviço</a>
                <a href="">Fale Conosco</a>
                <a href="">FAQ</a>
            </div>
            <button className={styles['navbar-btn']}>Fale Conosco</button>
            <button className={styles['navbar-menu']} onClick={toggleMenu}>
                <IoMdMenu />
            </button>
        </div>
    </nav>
  )
}

export default Navbar