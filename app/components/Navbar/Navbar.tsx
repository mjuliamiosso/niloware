import React, { useState } from 'react';
import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

interface NavbarProps {
  link: string;
  ref: string;
}

const Navbar: React.FC<NavbarProps> = ({ link, ref }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Link href='/home'>
            <h3>Nilo
              <span>
                ware
              </span>
            </h3>
          </Link>

          <div className={classNames(
            styles.links,
            { [styles.open]: isOpen })
          }>
            <a href={ref}>
              {link}
            </a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <ThemeToggle />
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
    </div>
  )
}

export default Navbar