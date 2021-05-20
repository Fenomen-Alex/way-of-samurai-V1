import React from 'react';
import styles from './FormControl.module.css';

const FormControl = (props) => {
  const { meta } = props;
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Inputarea = (props) => {
  const { input, restProps } = props;
  return <FormControl {...props}><input {...input} {...props}/></FormControl>
};

export const Textarea = (props) => {
  const { input, restProps } = props;
  return <FormControl {...props}><textarea cols={50} rows={10} {...input} {...props}/></FormControl>
};
