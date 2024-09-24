import React from 'react'
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import styles from './ClientCard.module.scss'

interface ClientCardProps {
  image: any;
  link: any;
}

const ClientCard: React.FC<ClientCardProps> = ({ image, link }) => {
  return (
    <div className={styles['client-card']}>
      <img src={image} alt="client-image" />
      <a href={link}>
        <LiaExternalLinkSquareAltSolid />
      </a>
    </div>
  )
}

export default ClientCard