import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return (
        <div>
            <div>
                <img
                    src="https://vastphotos.com/files/uploads/photos/10185/japan-mountain-landscape-m.jpg"
                    alt="user-cover"
                />
            </div>
            <div className={classes.description}>
              <img src={props.profile.photos.large} alt="ava"/>
              <div>ava+description</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
