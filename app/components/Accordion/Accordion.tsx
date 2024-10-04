import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { FaPlus, FaMinus  } from "react-icons/fa6";
import classNames from 'classnames';

interface Item {
  title: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);

  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}
        >
          <button
            className={classNames(
              styles.button,
              { [styles.isOpen]: activeIndex === index }
            )}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <p>
              {activeIndex === index ? <FaMinus  /> : <FaPlus />}
            </p>
          </button>
          <div
            className={classNames(
              styles.content,
              { [styles.active]: activeIndex === index }
            )}
          >
            <p>
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;