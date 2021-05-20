import React from 'react';
// import {Field, reduxForm} from "redux-form";
import {Form, Field} from 'react-final-form';
import {Inputarea} from "../Common/FormControls/FormControl";
import {composeValidators, maxLengthCreator, required} from "../../utils/validators";

const LoginForm = () => {
  return (
    <Form
      onSubmit={(formData) => {
        console.log(formData)
        // return formData;
      }}>
      {({handleSubmit}) => (
        <form action="" onSubmit={handleSubmit}>
          <div>
            <Field
              placeholder="Login"
              name="login"
              component={Inputarea}
              validate={composeValidators(required, maxLengthCreator(16))}
            />
          </div>
          <div>
            <Field
              placeholder="Password"
              name="password"
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
        </form>)}
    </Form>
  );
};

const Login = () => {

  return (
    <div>
      <h1>Login</h1>
      <LoginForm/>
    </div>
  )
}

export default Login;
