import React from 'react';
// import {Field, reduxForm} from "redux-form";
import {Form, Field} from 'react-final-form';
import {Inputarea} from '../Common/FormControls/FormControl';
import {composeValidators, maxLengthCreator, required} from '../../utils/validators';
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {FORM_ERROR} from 'final-form';
import styles from '../Common/FormControls/FormControl.module.css';

const LoginForm = (props) => {
  const onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe);
    return {
      [FORM_ERROR]: 'Incorrect email or password'
    }
  };
  return (
    <Form
      onSubmit={onSubmit}>
      {({handleSubmit, submitError, submitFailed}) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              placeholder="Email"
              name="email"
              component={Inputarea}
              validate={composeValidators(required, maxLengthCreator(30))}
            />
          </div>
          <div>
            <Field
              placeholder="Password"
              name="password"
              type="password"
              component={Inputarea}
              validate={composeValidators(required, maxLengthCreator(16))}
            />
          </div>
          <div>
            <Field
              type="checkbox"
              name="rememberMe"
              component={Inputarea}
            /> Remember me
          </div>
          <div>
            <button>Login</button>
          </div>
          {submitFailed && <div className={styles.error}>{submitError}</div>}
        </form>)}
    </Form>
  );
}
;

const Login = (props) =>
{

  if (props.isAuth) {
    return <Redirect to="/profile"/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={props.login}/>
    </div>
  )
}

const mapStateToProps = (state) => (
{
  isAuth: state.auth.isAuth
}
)

export default connect(mapStateToProps,
{
  login
}
)(Login);
