import React from "react";
import {addPostActionCreator, textChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {

    return <StoreContext.Consumer>
        { (store) => {
            const state = store.getState().profilePage;

            const addPost = () => {
                // props.addPost();
                store.dispatch(addPostActionCreator());
            }

            const textChange = (text) => {
                // props.textChange();
                store.dispatch(textChangeActionCreator(text));
            }
            return (<MyPosts
            textChange={textChange}
            addPost={addPost}
            posts={state.posts}
            text={state.newPostText}
        />)}}
    </StoreContext.Consumer>;
};

export default MyPostsContainer;
