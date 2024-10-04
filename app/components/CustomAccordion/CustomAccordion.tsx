import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './CustomAccordion.module.scss';

interface AccordionItem {
  title: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (index: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={styles.accordion}
          disableGutters
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomAccordion;