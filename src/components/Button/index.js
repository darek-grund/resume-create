import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  const { children, flat } = props;

  const className = [styles.button];
  if (flat) {
    className.push(styles.flat);
  }

  return <div className={className.join(' ')}>{children}</div>;
};

export default Button;
