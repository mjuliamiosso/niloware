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
      <div className={styles.container}>
        <h3>Nilo
          <span>
            ware
          </span>
        </h3>
        <div className={classNames(
          styles.links,
          { [styles.open]: isOpen })
        }>
          <a href="">
            Recursos
          </a>
          <a href="">
            Processo
          </a>
          <a href="">
            Clientes
          </a>
          <a href="">
            Serviços
          </a>
          <a href="">
            Fale Conosco
          </a>
          <a href="">
            FAQ
          </a>
        </div>
        <button className={styles.button}>
          Fale Conosco
        </button>
        <button
          onClick={toggleMenu}
          className={styles.menu}>
          <IoMdMenu />
        </button>
      </div>
    </div>
  )
}

export default Navbar