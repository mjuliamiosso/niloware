import React from 'react'
import styles from './Faq.module.scss'
import classNames from 'classnames'

const Faq = () => {
  return (
    <section className={styles.faq}>
        <div className={classNames(styles['faq-container'], 'container')}>
            <h2>Faq</h2>
            {/* to-do: accordion(bootstrap) */}
        </div>
    </section>
  )
}

export default Faq