import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
  const { children, flat } = props;

  const className = [styles.button];
  if (flat) {
    className.push(styles.flat);
  }

  return <div className={className.join(' ')}>{children}</div>;
};

Button.propTypes = {
  flat: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  flat: false,
  children: '',
};

export default Button;
