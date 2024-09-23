import React from 'react'
import styles from './Contact.module.scss'
import classNames from 'classnames'

const Contact = () => {
  return (
    <section className={styles.contact}>
        <div className={classNames(styles['contact-container'], 'container')}>
            <h2>Fale conosco</h2>
            <div className={styles['contact-input']}>
                <input type="text" name="" id="" placeholder='Nome'/>
                <div className={styles['contact-input-container']}>
                    <input type="text" placeholder='E-mail'/>
                    <input type="text" placeholder='Telefone'/>
                </div>
                <textarea name="" id="" placeholder='Escreva sua mensagem'></textarea>
                <button>Enviar</button>
            </div>
        </div>
    </section>
  )
}

export default Contact