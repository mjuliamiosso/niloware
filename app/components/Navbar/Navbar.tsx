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
    <div className={styles.navbar}>
      <div className={classNames(styles['navbar-container'], 'container')}>
        <h3>Nilo<span>ware</span></h3>
        <div className={styles['navbar-links']}>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <button className={styles['navbar-btn']}>Fale Conosco</button>
        <button className={styles['navbar-menu']}>
          <IoMdMenu />
        </button>
      </div>
    </div>
  )
}

export default Navbar