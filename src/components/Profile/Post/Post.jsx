import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
  <div className={classes.item}>
    <img className={classes.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9WxSgUiBmJYggP9S43CU6jbP3B8_ZaUDY5_66E0hEgWTk9Zr0mXAQKw67uxHIP027ys&usqp=CAU" alt="icon" />
    {props.message}
    <br />
    <span>Like {props.likeCounter}</span>
  </div>);
};

export default Post;
