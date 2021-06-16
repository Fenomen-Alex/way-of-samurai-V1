import React from "react";
// import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}
                   isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   saveProfile={props.saveProfile}
                   updateStatus={props.updateStatus}
                   getUserProfile={props.getUserProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
