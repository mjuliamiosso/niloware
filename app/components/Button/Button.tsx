import React from 'react'
import styles from './Button.module.scss'

interface buttonProps {
    text: string;
    link: any;
  }

const Button: React.FC<buttonProps> = ({text, link}) =>{
  return (
    <a href={link}>
        <button className={styles.btn} >
            {text}
        </button>
    </a>
  )
}

export default Button