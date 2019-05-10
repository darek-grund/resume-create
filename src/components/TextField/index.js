import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = props => {
  const { placeholder } = props;
  const [hasFocus, setHasFocus] = useState(false);

  const className = [styles.textField];
  if (hasFocus) {
    className.push(styles.focus);
  }
  return (
    <div className={className.join(' ')}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  placeholder: '',
};

export default TextField;
