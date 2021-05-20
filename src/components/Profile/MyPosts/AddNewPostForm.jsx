import React from 'react';
import {Field, Form} from "react-final-form";
import { required, maxLengthCreator, composeValidators } from '../../../utils/validators';
import { Textarea } from '../../Common/FormControls/FormControl';

const AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component={Textarea}
                            name="newPostText"
                            placeholder="Type your post text here"
                            validate={composeValidators(required, maxLengthCreator(30))}
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
