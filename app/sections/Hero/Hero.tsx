import React from 'react'
import classNames from 'classnames';
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <header className={styles['hero']}>
        <div className={classNames(styles['hero-container'], 'container')}>
            <h1>Transforme Seu Negócio com um Site Profissional</h1>
            <h3>Sites WordPress rápidos, responsivos e fáceis de gerenciar, feitos sob medida para aumentar sua presença online e impulsionar o crescimento do seu negócio.</h3>
        </div>
    </header>
  )
}

export default Hero