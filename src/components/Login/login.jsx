import React from 'react';
// import {Field, reduxForm} from "redux-form";
import { Form, Field } from 'react-final-form';

const LoginForm = () => {
  return (
    <Form
      onSubmit={ (formData) => {
      console.log(formData)
      // return formData;
    }}>
      {({handleSubmit}) =>(
        <form action="" onSubmit={handleSubmit}>
          <div>
            <Field placeholder="Login" name="login" component="input"/>
          </div>
          <div>
            <Field placeholder="Password" name="password" component="input"/>
          </div>
          <div>
            <Field type="checkbox" name="rememberMe" component="input"/> Remember me
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>)}
    </Form>
  );
};

const Login = () => {

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login;
