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
        <section className={styles.clients}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>
                        Portfólio
                    </h2>
                    <a
                        href=""
                    >
                        Ver portfólio completo
                        <LiaExternalLinkSquareAltSolid />
                    </a>
                </div>
                <CardCarousel
                    images={images}
                    mainTag={'MainTag'}
                    tag={['Tag']}
                    title={'Título'} 
                />
            </div>
        </section>
    )
}

export default Clients