import React from "react";
import classes from "./MyPosts.module.css"
import Post from "../Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(item => <Post key={item.id} message={item.message} likeCounter={item.likes} />)

    let newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const textChange = () => {
        let text = newPostElement.current.value
        props.newPostTextUpdate(text)
    }

    return (
    <div className={classes.postsWrapper}>
      <h3>My posts</h3>
      <div>
          <div>
              <textarea
                  ref={newPostElement}
                  onChange={textChange}
                  value={props.text}
                  autoFocus
                  onFocus={(e) => {
                      let val = e.target.value;
                      e.target.value = '';
                      e.target.value = val;
                  }}
              />
          </div>
          <div>
              <button onClick={addPost} >Add post</button>
          </div>
      </div>
      <div className={classes.posts}>
          {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
