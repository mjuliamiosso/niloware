import React, { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </button>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === index ? styles.active : ''
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
