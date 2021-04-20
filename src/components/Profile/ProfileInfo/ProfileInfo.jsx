import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://vastphotos.com/files/uploads/photos/10185/japan-mountain-landscape-m.jpg"
                    alt="user-cover"
                />
            </div>
            <div className={classes.description}>ava+description</div>
        </div>
    );
};

export default ProfileInfo;
