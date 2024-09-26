import React from 'react'
import styles from './Contact.module.scss'
import classNames from 'classnames'
import Button from '@/app/components/Button/Button'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={classNames(styles['contact-container'], 'container')}>
        <h2 className='subtitle dark'>Fale conosco</h2>
        <div className={styles['contact-input']}>
          <input type="text" name="" id="" placeholder='Nome' />
          <div className={styles['contact-input-container']}>
            <input type="text" placeholder='E-mail' />
            <input type="text" placeholder='Telefone' />
          </div>
          <textarea name="" id="" placeholder='Escreva sua mensagem'></textarea>
          <Button text='Enviar'/>
        </div>
      </div>
    </section>
  )
}

export default Contact