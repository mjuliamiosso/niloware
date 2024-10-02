import React from 'react'
import styles from './Button.module.scss'

interface buttonProps {
  text: string;
  link: string;
}

const Button: React.FC<buttonProps> = ({ text, link }) => {
  return (
    <a href={link} className={styles.button}>
      {text}
    </a>
  )
}

export default Button;