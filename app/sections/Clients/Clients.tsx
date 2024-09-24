import classNames from 'classnames'
import styles from './Clients.module.scss'
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import ClientCard from '../../components/ClientCard/ClientCard'

import React from 'react'

const Clients = () => {
    return (
        <section className={styles.clients}>
            <div className={classNames(styles['clients-container'], 'container')}>
                <div className={styles['clients-text']}>
                    <h2>Clientes</h2>
                    <a href="">
                        Ver portfólio completo
                        <LiaExternalLinkSquareAltSolid />
                    </a>
                </div>
                <div className={styles['clients-carousel']}>
                    <ClientCard image='https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg' link=''></ClientCard>
                    <ClientCard image='https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg' link=''></ClientCard>
                    <ClientCard image='https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg' link=''></ClientCard>
                    <ClientCard image='https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg' link=''></ClientCard>
                    <ClientCard image='https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg' link=''></ClientCard>
                    <ClientCard image='https://h2ahubagroambiental.com.br/wp-content/uploads/2023/11/pinheiros-lindos-nas-montanhas-1.jpg' link=''></ClientCard>
                </div>
            </div>
        </section>
    )
}

export default Clients