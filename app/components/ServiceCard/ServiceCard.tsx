import React from 'react'
import styles from './ServiceCard.module.scss'
import { FaCheck } from "react-icons/fa";
import Button from '../Button/Button';

interface ClientCardProps {
    plan: string;
    description: string;
    price: number;
    siteItem: string;
    hostingItem: string;
}

const ServiceCard: React.FC<ClientCardProps> = ({ plan, description, price, siteItem, hostingItem }) => {
    return (
        <div className={styles['service-card-container']}>
            <div className={styles['service-card-title']}>
                <p className={styles['service-card-plan']}>{plan}</p>
                <p className={styles['service-card-description']}>{description}</p>
                <p className={styles['service-card-price']}>R$<span>{price}</span></p>
                <Button text='Escolher'/>
            </div>
            <div className={styles['service-card-list']}>
                <div className={styles['service-card-site']}>
                    <p>Site</p>
                    <ul>
                        <li><FaCheck />{siteItem}</li>
                    </ul>
                </div>
                <div className={styles['service-card-hosting']}>
                    <p>Hospedagem</p>
                    <ul>
                        <li><FaCheck />{hostingItem}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard