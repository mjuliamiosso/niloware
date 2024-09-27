import React from 'react'
import styles from './Resource.module.scss'
import classNames from 'classnames';
import ResourceCard from '@/app/components/ResourceCard/ResourceCard';
import { FaPencilRuler } from 'react-icons/fa';

const Resource = () => {
  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <h2 className={classNames(
          styles.subtitle,
          styles.dark
        )}>
          Recursos
        </h2>
        <div className={styles.cards}>
          <ResourceCard
            icon={FaPencilRuler}
            title='Texto'
            description='Descrição'
          />
          <ResourceCard
            icon={FaPencilRuler}
            title='Texto'
            description='Descrição'
          />
          <ResourceCard
            icon={FaPencilRuler}
            title='Texto'
            description='Descrição'
          />
          <ResourceCard
            icon={FaPencilRuler}
            title='Texto'
            description='Descrição'
          />
          <ResourceCard
            icon={FaPencilRuler}
            title='Texto'
            description='Descrição'
          />
          <ResourceCard
            icon={FaPencilRuler}
            title='Texto'
            description='Descrição'
          />
        </div>
      </div>
    </section>
  )
}

export default Resource