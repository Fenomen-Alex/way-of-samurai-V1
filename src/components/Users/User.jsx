import React from 'react';
import styles from './Users.module.css';
import ava from '../../assets/images/user_ava.png';
import {NavLink} from 'react-router-dom';

const User = ({ user, followingInProgress, follow, unfollow}) => {

  return (
    <div>
      <div key={user.id}>
            <span>
              <div>
                <NavLink to={'/profile/' + user.id}>
                  <img
                    src={user.photos.small !== null
                      ? user.photos.small
                      : ava}
                    className={styles.photo}
                    alt="avatar"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed
                  ? <button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => unfollow(user.id)}
                  >
                    Unfollow
                  </button>
                  : <button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => follow(user.id)}>
                    Follow
                  </button>}
              </div>
            </span>
        <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
      </div>
    </div>
  )
};

export default User;
