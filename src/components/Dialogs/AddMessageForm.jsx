import React from 'react';
import {Form, Field} from 'react-final-form';
import { composeValidators, maxLengthCreator, required } from '../../utils/validators';
import { Textarea } from '../Common/FormControls/FormControl';

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component={Textarea}
                            name="newMessageText"
                            placeholder="Enter your message"
                            validate={composeValidators(required, maxLengthCreator(300))}
                        />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
        </Form>
    );
};

export default AddMessageForm;
