import React, { use, useState } from 'react'
import classNames from 'classnames'
import styles from './Process.module.scss'
import ProcessButton from '@/app/components/ProcessButton/ProcessButton'

const Process = () => {
    const [title, setTitle] = useState("Título 1")
    const [text, setText] = useState("Texto 1")
    const [activeButton, setActiveButton] = useState(1)

    //textos
    const text1 = () => {
        setTitle("Título 1");
        setText("Texto 1");
        setActiveButton(1)
    }

    const text2 = () => {
        setTitle("Título 2");
        setText("Texto 2");
        setActiveButton(2)
    }

    const text3 = () => {
        setTitle("Título 3");
        setText("Texto 3");
        setActiveButton(3)
    }

    const text4 = () => {
        setTitle("Título 4");
        setText("Texto 4");
        setActiveButton(4)
    }

    return (
        <section className={classNames(styles['process'], 'background')}>
            <div className={classNames(styles['process-container'], 'container')}>
                <h2 className='subtitle light'>Processo</h2>
                <div className={styles['process-details']}>
                    <div className={styles['process-btn']}>
                        <ProcessButton active={activeButton === 1 ? styles.active : ''} event={text1} />
                        <ProcessButton active={activeButton === 2 ? styles.active : ''} event={text2} />
                        <ProcessButton active={activeButton === 3 ? styles.active : ''} event={text3} />
                        <ProcessButton active={activeButton === 4 ? styles.active : ''} event={text4} />
                    </div>
                    <div className={styles['process-text']}>
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process