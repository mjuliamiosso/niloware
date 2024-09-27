import React from 'react';
import styles from './ProcessButton.module.scss';

interface ProcessButtonProps {
  event: () => void;
  active: string;
}

const ProcessButton: React.FC<ProcessButtonProps> = ({ event, active }) => {
  console.log("Active class:", active);  // Verifica se a classe 'active' está sendo passada corretamente
  return (
    <button onClick={event} className={`${styles['process-button']} ${active}`}>
      <p>+</p>
    </button>
  );
};

export default ProcessButton;