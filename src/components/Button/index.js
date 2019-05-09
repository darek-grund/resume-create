import React from 'react';
import styles from './Button.module.css';

const Index = props => {
  const { children, flat } = props;

  const className = [styles.button];
  if (flat) {
    className.push(styles.flat)
  };

  return (
    <div className={className.join(' ')}>
      {children}
    </div>
  );
};

export default Index;
