import React from 'react';
import styles from './Services.module.scss';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>
                        Serviços
                    </h2>
                </div>
                <div className={styles.card}>
                    <ServiceCard
                        plan='Expresso'
                        description='Descrição do Serviço'
                        textPrice='A PARTIR DE '
                        price='R$599,90'
                        siteItem='Item 1'
                    />
                    <ServiceCard
                        plan='Sob Medida'
                        description='Descrição do Serviço'
                        textPrice=''
                        price='SOB ORÇAMENTO'
                        siteItem='Item 1'
                    />
                </div>
            </div>
        </section>
    )
}

export default Services