import React from 'react';
import styles from './Chip.module.css';

const Index = props => {
  const { children, close } = props;

  return (
    <div className={styles.chip}>
      {children}
      {close ? <span className={styles.close} /> : false}
    </div>
  );
};

export default Index;
