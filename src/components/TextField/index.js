import React, { useState } from 'react';
import styles from './TextField.module.css';

const TextField = props => {
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
        placeholder={props.placeholder}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
};

export default TextField;
