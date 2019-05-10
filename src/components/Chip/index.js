import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.module.css';

const Chip = props => {
  const { children, close } = props;

  return (
    <div className={styles.chip}>
      {children}
      {close ? <span className={styles.close} /> : false}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  close: PropTypes.bool,
};

Chip.defaultProps = {
  children: '',
  close: false,
};

export default Chip;
