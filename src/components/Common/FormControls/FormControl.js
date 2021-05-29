import React from 'react';
import styles from './FormControl.module.css';
import {Field} from "react-final-form";
import {composeValidators} from "../../../utils/validators";

const FormControl = ({ meta, children }) => {
  const { touched, error, submitFailed, submitError } = meta;
  const hasError = touched && (error || submitFailed);
  return (
    <div
      className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {children}
      {hasError && <span>{error || submitError}</span>}
    </div>
  );
};

export const Inputarea = (props) => {
  const { input } = props;
  return <FormControl {...props}><input autoComplete="on" {...input} {...props}/></FormControl>
};

export const Textarea = (props) => {
  const { input } = props;
  return <FormControl {...props}><textarea cols={50} rows={10} {...input} {...props}/></FormControl>
};

export const createField = ( placeholder, name, component, [...validators], props ={}, text = "") => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={composeValidators(...validators)}
      {...props}
    /> {text}
  </div>
)
