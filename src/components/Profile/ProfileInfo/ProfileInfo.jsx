import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/preloader';
import ava from '../../../assets/images/user_ava.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, getUserProfile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
        getUserProfile(profile.userId);
      }
    );
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
              <img src={profile.photos.large || ava} className={classes.mainPhoto} />
              { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
              { editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
              <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus}
              />
              <div>ava+description</div>
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
    <div>
      <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }

    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
  </div>
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
