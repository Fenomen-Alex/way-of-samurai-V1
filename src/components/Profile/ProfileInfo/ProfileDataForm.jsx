import React from "react";
import {Form} from "react-final-form";
import s from './ProfileInfo.module.css';
import {createField, Inputarea, Textarea} from "../../Common/FormControls/FormControl";
import {required} from "../../../utils/validators";
import style from "../../Common/FormControls/FormControl.module.css";

const ProfileDataForm = ({onSubmit, profile, error}) => {

  return (
    <Form onSubmit={onSubmit}>
      {({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div>
            <button>save</button>
          </div>
          {error && <div className={style.formSummaryError}>
            {error}
          </div>
          }
          <div>
            <b>Full name</b>: {createField("Full name", "fullName", Inputarea, [required])}
          </div>
          <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob",  Inputarea, [required], {type: "checkbox"})}
          </div>

          <div>
            <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", Textarea, [required])}
          </div>


          <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", Textarea, [required])}
          </div>
          <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
              <b>{key}: {createField(key, "contacts." + key, Inputarea, [])}</b>
            </div>
          })}
          </div>
        </form>
      )}
    </Form>
  )
}


export default ProfileDataForm; 
