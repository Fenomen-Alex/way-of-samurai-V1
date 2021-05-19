import React from 'react';
import classes from './MyPosts.module.css';
import Post from '../Post/Post';
import AddNewPostForm from "./AddNewPostForm";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(item => <Post
                key={item.id}
                message={item.message}
                likeCounter={item.likes}
            />
        );
    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsWrapper}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
