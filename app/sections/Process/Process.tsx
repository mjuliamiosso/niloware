import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Process.module.scss';
import ProcessButton from '@/app/components/ProcessButton/ProcessButton';
import { FaPencilRuler } from 'react-icons/fa';
import Arrow from '../../../public/assets/arrow.png';
import { useTranslation } from '../../hooks/useTranslation';

const Process: React.FC = () => {
    const { process } = useTranslation();

    const icons = [
        FaPencilRuler,
        FaPencilRuler,
        FaPencilRuler,
        FaPencilRuler
    ];

    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <h2>
                    {process?.title}
                </h2>
                <div className={styles.processContainer}>
                    {process?.steps?.map((step, index) => (
                        <React.Fragment key={index}>
                            <ProcessButton
                                icon={icons[index]}
                                title={step.title}
                                description={step.description}
                            />
                            {index < process.steps.length - 1 && (
                                <Image
                                    className={styles.arrow}
                                    src={Arrow}
                                    alt="arrow"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process