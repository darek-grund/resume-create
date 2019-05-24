import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';
import { stringifyClassNames } from '../../utils/css-modules';

const TextField = props => {
  const { placeholder } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState('');

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
        onChange={event => setValue(event.target.value)}
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
