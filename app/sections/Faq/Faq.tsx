import React from 'react'
import styles from './Faq.module.scss'
import classNames from 'classnames'
import Accordion from '../../components/Accordion/Accordion';

const Faq = () => {
  const items = [
    { title: 'Item 1', content: 'Descrição.' },
    { title: 'Item 2', content: 'Descrição.' },
    { title: 'Item 3', content: 'Descrição.' }
  ];

  return (
    <section className={styles.faq}>
      <div className={classNames(styles.container)}>
        <h2 className={styles.subtitle}>
          Faq
        </h2>
        <div>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  )
}

export default Faq