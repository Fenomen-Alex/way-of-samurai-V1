import React from 'react';
import {Field, Form} from "react-final-form";

const AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component="textarea"
                            name="newPostText"
                            placeholder="Type your post text here"
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
