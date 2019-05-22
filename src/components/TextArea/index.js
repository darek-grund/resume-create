import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

const TextArea = props => {
  const { placeholder } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState('');

  const className = [styles.textArea];

  if (hasFocus) {
    className.push(styles.focus);
  }
  if (value) {
    className.push(styles.dirty);
  }
  return (
    <div className={className.join(' ')}>
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
