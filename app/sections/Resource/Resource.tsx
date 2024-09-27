import React from 'react'
import styles from './Resource.module.scss'
import classNames from 'classnames';
import ResourceCard from '@/app/components/ResourceCard/ResourceCard';

const Resource = () => {
  return (
    <section className={classNames(styles['resources'], 'background')}>
      <div className={classNames(styles['resources-container'], 'container')}>
        <h2 className='subtitle dark'>Recursos</h2>
        <div className={styles['resources-cards']}>
          <ResourceCard title='Texto' description='Descrição'></ResourceCard>
          <ResourceCard title='Texto' description='Descrição'></ResourceCard>
          <ResourceCard title='Texto' description='Descrição'></ResourceCard>
          <ResourceCard title='Texto' description='Descrição'></ResourceCard>
          <ResourceCard title='Texto' description='Descrição'></ResourceCard>
          <ResourceCard title='Texto' description='Descrição'></ResourceCard>
        </div>
      </div>
    </section>
  )
}

export default Resource