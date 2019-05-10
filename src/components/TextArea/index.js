import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

const TextArea = props => {
  const { placeholder } = props;
  const [hasFocus, setHasFocus] = useState(false);

  const className = [styles.textArea];
  if (hasFocus) {
    className.push(styles.focus);
  }
  return (
    <div className={className.join(' ')}>
      <textarea
        className={styles.input}
        placeholder={placeholder}
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
