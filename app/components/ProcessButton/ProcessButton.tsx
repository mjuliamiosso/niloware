import React from 'react'
import styles from './ProcessButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'

const ProcessButton = () => {
  return (
    <button className={styles['process-button']}>
        <p>+</p>
    </button>
  )
}

export default ProcessButton