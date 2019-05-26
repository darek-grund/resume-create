import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { stringifyClassNames } from '../../utils/css-modules';

const Button = props => {
  const { children, flat, onClickCallback } = props;

  const activeCssClasses = {
    [styles.button]: true,
    [styles.flat]: flat,
  };

  return (
    <button
      type="button"
      className={stringifyClassNames(activeCssClasses)}
      onClick={onClickCallback}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  flat: PropTypes.bool,
  children: PropTypes.node,
  onClickCallback: PropTypes.func,
};

Button.defaultProps = {
  flat: false,
  children: '',
  onClickCallback: () => {},
};

export default Button;
