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
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.plan}>
                    {plan}
                </p>
                <p className={styles.description}>
                    {description}
                </p>
                <p className={styles.price}>
                    R$
                    <span>
                        {price}
                    </span>
                </p>
                <Button
                    text='Escolher'
                    link={''}
                    className={styles.customWidth}
                />
            </div>
            <div className={styles.list}>
                <div className={styles.site}>
                    <p>
                        Site
                    </p>
                    <ul>
                        <li>
                            <FaCheck />
                            {siteItem}
                        </li>
                    </ul>
                </div>
                <div className={styles.host}>
                    <p>
                        Hospedagem
                    </p>
                    <ul>
                        <li>
                            <FaCheck />
                            {hostingItem}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard