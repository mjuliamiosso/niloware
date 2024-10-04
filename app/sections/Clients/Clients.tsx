import React, { useEffect, useState } from 'react'
import styles from './Clients.module.scss'
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import { HiOutlineExternalLink } from "react-icons/hi";
import cardsData from '../../../data/clientCards.json';

interface Card {
    title: string;
    image: string;
    mainTag: string;
    tag: string[];
}

const Clients: React.FC = () => {
    const [clientCards, setClientCards] = useState<Card[]>([]);

    useEffect(() => {
        setClientCards(cardsData.slice(0, 6));
    }, []);

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
                <CardCarousel cards={clientCards} />
            </div>
        </section>
    )
}

export default Clients