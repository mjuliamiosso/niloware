import React from 'react';
import styles from './ProcessButton.module.scss';
import classNames from 'classnames';

interface ProcessButtonProps {
  event: () => void;
  active: string;
}

const ProcessButton: React.FC<ProcessButtonProps> = ({ event, active }) => {
  return (
    <button
      onClick={event}
      className={classNames(
        styles.button,
        active)
      }>
      <p>
        +
      </p>
    </button>
  );
};

export default ProcessButton;