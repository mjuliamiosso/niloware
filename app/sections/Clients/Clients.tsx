import styles from './Clients.module.scss'
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import { HiOutlineExternalLink } from "react-icons/hi";
import React from 'react'

const Clients = () => {
    const images = [
        'https://knowledge.hubspot.com/hs-fs/hubfs/shopify-screenshot-BR.png?width=2608&height=1644&name=shopify-screenshot-BR.png',
        'https://s3-alpha.figma.com/hub/file/2448294576/f6a7cf24-db0f-4eaa-947e-b15eb3991692-cover.png',
        'https://s3-alpha.figma.com/hub/file/3602455636/45e1e0d9-9c04-4e6b-bef6-7a1a09215cdc-cover.png',
        'https://sites.agencianovaacao.com.br/wp-content/uploads/2024/03/Landing-Page-ou-site-One-Page.jpg',
        'https://studioartemis.co/wp-content/uploads/2023/11/Mockup-site-_5_-1024x576.webp',
        'https://unbounce.com/photos/indochino-inline.jpg'
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
                        <span>
                            <HiOutlineExternalLink />
                        </span>
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