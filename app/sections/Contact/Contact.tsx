import React from 'react'
import styles from './Contact.module.scss'
import Button from '@/app/components/Button/Button'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>
          Fale conosco
        </h2>
        <div className={styles.inputs}>
          <input
            type="text"
            name=""
            id=""
            placeholder='Nome'
          />
          <div className={styles.contacts}>
            <input
              type="text"
              placeholder='E-mail'
            />
            <input
              type="text"
              placeholder='Telefone'
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder='Escreva sua mensagem'
          />
          <Button
            text='Enviar'
            link={''}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact