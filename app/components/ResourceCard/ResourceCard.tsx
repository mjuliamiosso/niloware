import './ResourceCard.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ResourceCardProps {
    icon: any;
    title: string;
    description: string;
  }

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description }) => {
  return (
    <div className='resource-card'>
        <div className='icon'>
            <p><FontAwesomeIcon icon={icon} /></p>
        </div>
        <div className='text'>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div>
    </div>
  )
}

export default ResourceCard