import React from 'react';
import styles from './Button.module.css';

// CTRL + K + C TO UNCOMMENT!!!


const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
