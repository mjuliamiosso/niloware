import React from 'react'
import styles from './Services.module.scss'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import classNames from 'classnames'

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={classNames(styles['services-container'], 'container')}>
                <div className={styles['services-text']}>
                    <h2 className='subtitle light'>Serviços</h2>
                    <div className={styles['services-select']}>
                        <label htmlFor="">Hospedagem:</label>
                        <select id="plan" name="plan">
                            <option value="none">Nenhuma</option>
                            <option value="domain">Domínio</option>
                        </select>
                    </div>
                </div>
                <div className={styles['services-card']}>
                    <ServiceCard plan='Básico' description='Landing Page (4 Seções)' price={0} siteItem='Item 1' hostingItem='Item 1'></ServiceCard>
                    <ServiceCard plan='Padrão' description='website (2-5 páginas)' price={0} siteItem='Item 1' hostingItem='Item 1'></ServiceCard>
                    <ServiceCard plan='Premium' description='website (6-10 páginas)' price={0} siteItem='Item 1' hostingItem='Item 1'></ServiceCard>
                </div>
            </div>
        </section>
    )
}

export default Services