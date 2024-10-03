import React, { useState } from 'react'
import styles from './Process.module.scss'
import ProcessButton from '@/app/components/ProcessButton/ProcessButton'
import { FaPencilRuler } from 'react-icons/fa';

const Process = () => {

    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <h2>
                    Processo
                </h2>
                <div className={styles.processContainer}>
                    <ProcessButton
                        icon={FaPencilRuler}
                        title='Título'
                        description='Descrição'
                    />
                    <ProcessButton
                        icon={FaPencilRuler}
                        title='Título'
                        description='Descrição'
                    />
                    <ProcessButton
                        icon={FaPencilRuler}
                        title='Título'
                        description='Descrição'
                    />
                    <ProcessButton
                        icon={FaPencilRuler}
                        title='Título'
                        description='Descrição'
                    />
                </div>
            </div>
        </section>
    )
}

export default Process