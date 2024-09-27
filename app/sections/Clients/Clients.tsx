import classNames from 'classnames'
import styles from './Clients.module.scss'
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import CardCarousel from '../../components/CardCarousel/CardCarousel';

import React from 'react'

const Clients = () => {
    const images = [
        'https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg',
        'https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg',
        'https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg',
        'https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg',
        'https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg',
        'https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg'
    ];

    return (
        <section className={classNames(styles['clients'], 'background')}>
            <div className={classNames(styles['clients-container'], 'container')}>
                <div className={styles['clients-text']}>
                    <h2 className='subtitle dark'>Clientes</h2>
                    <a className='ff-secondary' href="">
                        Ver portfólio completo
                        <LiaExternalLinkSquareAltSolid />
                    </a>
                </div>
                <CardCarousel images={images} />
            </div>
        </section>
    )
}

export default Clients