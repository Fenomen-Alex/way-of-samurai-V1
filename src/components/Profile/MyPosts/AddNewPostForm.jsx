import React from 'react';
import {Field, Form} from "react-final-form";
import { maxLengthCreator, composeValidators} from '../../../utils/validators';
import {Textarea} from '../../Common/FormControls/FormControl';

const AddNewPostForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {({handleSubmit, form}) => (
        <form onSubmit={(e) => {handleSubmit(e).then(form.reset)} }>
          <div>
            <Field
              component={Textarea}
              name="newPostText"
              placeholder="Type your post text here"
              validate={composeValidators(maxLengthCreator(30))}
            />
          </div>
          <div>
            <button>Add post</button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default AddNewPostForm;
