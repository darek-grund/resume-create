import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';
import { stringifyClassNames } from '../../utils/css-modules';

const TextArea = props => {
  const { placeholder } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState('');

  const activeCssClasses = {
    [styles.textArea]: true,
    [styles.focus]: hasFocus,
    [styles.dirty]: value,
  };

  return (
    <div className={stringifyClassNames(activeCssClasses)}>
      <label className={styles.label}>{placeholder}</label>
      <textarea
        className={styles.input}
        value={value}
        onChange={event => setValue(event.target.value)}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  placeholder: '',
};

export default TextArea;
