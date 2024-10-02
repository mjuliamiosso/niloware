import React from 'react';
import styles from './Services.module.scss';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import classNames from 'classnames'
import Select from 'react-select'

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#FAFAFA' : state.isSelected ? '#FAFAFA' : '#29282D',
    }),
};

const options = [
    { value: 'none', label: 'Nenhuma' },
    { value: 'hosting', label: 'Hospedagem' }
]

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className='subtitle light'>
                        Serviços
                    </h2>
                    <div className={styles.select}>
                        <label htmlFor="">
                            Hospedagem:
                        </label>
                        <Select
                            options={options}
                            placeholder="Nenhuma"
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#347BDB',
                                    primary: '#111111',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className={styles.card}>
                    <ServiceCard
                        plan='Básico'
                        description='Landing Page (4 Seções)'
                        price={0}
                        siteItem='Item 1'
                        hostingItem='Item 1'
                    />
                    <ServiceCard
                        plan='Padrão'
                        description='website (2-5 páginas)'
                        price={0}
                        siteItem='Item 1'
                        hostingItem='Item 1'
                    />
                    <ServiceCard
                        plan='Premium'
                        description='website (6-10 páginas)'
                        price={0}
                        siteItem='Item 1'
                        hostingItem='Item 1'
                    />
                </div>
            </div>
        </section>
    )
}

export default Services