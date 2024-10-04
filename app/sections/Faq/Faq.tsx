import React from 'react'
import styles from './Faq.module.scss'
import CustomAccordion from '@/app/components/CustomAccordion/CustomAccordion';

const Faq = () => {
  const items = [
    { title: 'Item 1', content: 'Descrição.' },
    { title: 'Item 2', content: 'Descrição.' },
    { title: 'Item 3', content: 'Descrição.' },
    { title: 'Item 4', content: 'Descrição.' },
    { title: 'Item 5', content: 'Descrição.' },
    { title: 'Item 6', content: 'Descrição.' }
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>
          Faq
        </h2>
        <div>
          <CustomAccordion items={items} />
        </div>
      </div>
    </section>
  )
}

export default Faq