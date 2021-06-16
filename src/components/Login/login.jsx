import React from 'react';
// import {Field, reduxForm} from "redux-form";
import {Form} from 'react-final-form';
import {createField, Inputarea} from '../Common/FormControls/FormControl';
import { maxLengthCreator, required} from '../../utils/validators';
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {FORM_ERROR} from 'final-form';
import styles from '../Common/FormControls/FormControl.module.css';

const LoginForm = ({login, captchaUrl}) => {
  const onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    login(email, password, rememberMe, captchaUrl);
    return {
      [FORM_ERROR]: 'Incorrect email or password'
    }
  };
  return (
    <Form
      onSubmit={onSubmit}>
      {({handleSubmit, submitError, submitFailed}) => (
        <form onSubmit={(event) => handleSubmit(event)}>
          {createField("Email", "email", Inputarea, [required, maxLengthCreator(30)],)}
          {createField("Password", "password", Inputarea, [required, maxLengthCreator(16)], {type: "password"})}
          {createField(null, "rememberMe", Inputarea, [],{type: "checkbox"}, "Remember me")}
          { captchaUrl && <img src={captchaUrl} alt="captcha" />}
          { captchaUrl &&  createField("Symbols from image", "captcha", Inputarea, [required]) }

          <div>
            <button>Login</button>
          </div>
          {submitFailed && <div className={styles.error}>{submitError}</div>}
        </form>)}
    </Form>
  );
}
;

const Login = ({isAuth, login, captchaUrl}) => {

  if (isAuth) {
    return <Redirect to="/profile"/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={login} captchaUrl={captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => (
{
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
}
)

export default connect(mapStateToProps,
{
  login
}
)(Login);
