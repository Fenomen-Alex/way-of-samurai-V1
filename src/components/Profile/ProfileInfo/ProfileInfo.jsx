import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/preloader';
import ava from '../../../assets/images/user_ava.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
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
              { profile.photos.large
                ? <img src={profile.photos.large} alt="ava" />
                : <img src={ava} alt="ava" />
              }
              <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus}
              />
              <div>ava+description</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
