import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
          // store={props.store}
          // posts={props.store.getState().profilePage.posts}
          // dispatch={props.dispatch}
          // text={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
