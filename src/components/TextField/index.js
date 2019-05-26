import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { stringifyClassNames } from '../../utils/css-modules';
import styles from './TextField.module.css';

const TextField = props => {
  const { placeholder, defaultValue, onChangeCallback } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChange = event => {
    setValue(event.target.value);
    onChangeCallback(event.target.value);
  };

  const activeCssClasses = {
    [styles.textField]: true,
    [styles.focus]: hasFocus,
    [styles.dirty]: value,
  };

  return (
    <div className={stringifyClassNames(activeCssClasses)}>
      <label className={styles.label}>{placeholder}</label>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeCallback: PropTypes.func,
};

TextField.defaultProps = {
  placeholder: '',
  defaultValue: '',
  onChangeCallback: () => {},
};

export default TextField;
