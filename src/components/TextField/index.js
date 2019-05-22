import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = props => {
  const { placeholder } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState('');

  const className = [styles.textField];

  if (hasFocus) {
    className.push(styles.focus);
  }
  if (value) {
    className.push(styles.dirty);
  }
  return (
    <div className={className.join(' ')}>
      <label className={styles.label}>{placeholder}</label>
      <input
        type="text"
        className={styles.input}
        value={value}
        onInput={event => setValue(event.target.value)}
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
