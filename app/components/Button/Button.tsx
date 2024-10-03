import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';

interface buttonProps {
  text: string;
  link: string;
  className?: string;
}

const Button: React.FC<buttonProps> = ({ text, link, className }) => {
  return (
    <a
      href={link}
      className={classNames(
        styles.button,
        className
      )
      }>
      {text}
    </a>
  )
}

export default Button;