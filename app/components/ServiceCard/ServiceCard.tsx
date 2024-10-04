import React from 'react'
import styles from './ServiceCard.module.scss'
import { IoCheckmarkCircle } from "react-icons/io5";
import Button from '../Button/Button';

interface ClientCardProps {
    plan: string;
    description: string;
    price: string;
    siteItem: string;
    textPrice: string;
}

const ServiceCard: React.FC<ClientCardProps> = ({ plan, description, price, siteItem, textPrice }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.plan}>
                    {plan}
                </p>
                <p className={styles.description}>
                    {description}
                </p>
                <p className={styles.price}>
                    {textPrice}
                    <span>
                        {price}
                    </span>
                </p>
                <Button
                    text='Solicitar Orçamento'
                    link={''}
                    className={styles.customWidth}
                />
            </div>
            <div className={styles.list}>
                <div className={styles.site}>
                    <ul>
                        <li>
                            <span><IoCheckmarkCircle /></span>
                            {siteItem}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard