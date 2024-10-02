import React from 'react'
import classNames from 'classnames';
import styles from './Hero.module.scss'
import Button from '../../components/Button/Button'

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <h1>
          Transforme Seu Negócio com um Site Profissional
        </h1>
        <h3>
          Sites WordPress rápidos, responsivos e fáceis de gerenciar,
          feitos sob medida para aumentar sua presença online e impulsionar o crescimento do seu negócio.
        </h3>
        <Button
          link='#'
          text='Confira nossos planos'
        />
      </div>
    </header>
  )
}

export default Hero