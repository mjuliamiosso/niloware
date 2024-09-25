import React from 'react'
import styles from './Faq.module.scss'
import classNames from 'classnames'
import Accordion from '../../components/Accordion/Accordion';

const Faq = () => {
  const faqItems = [
    { title: 'Item 1', content: 'Descrição.' },
    { title: 'Item 2', content: 'Descrição.' },
    { title: 'Item 3', content: 'Descrição.' }
  ];

  return (
    <section className={styles.faq}>
      <div className={classNames(styles['faq-container'], 'container')}>
        <h2 className='subtitle light'>Faq</h2>
        {/* to-do: accordion(bootstrap) */}
        <Accordion items={faqItems}></Accordion>
      </div>
    </section>
  )
}

export default Faq