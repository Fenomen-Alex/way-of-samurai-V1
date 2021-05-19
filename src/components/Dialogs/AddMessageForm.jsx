import React from 'react';
import {Form, Field} from 'react-final-form';

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component="textarea"
                            name="newMessageText"
                            placeholder="Enter your message"
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
