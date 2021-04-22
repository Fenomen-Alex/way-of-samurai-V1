import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import ava from '../../assets/images/user_ava.png';

const Users = (props) => {

  const getUsers = () => {
    if (props.users.length === 0) {
      // eslint-disable-next-line no-unused-expressions
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
          .then(data => props.setUsers(data.data.items));
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {
        props.users.map(user => {
           return <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.photos.small !== null
                      ? user.photos.small
                      : ava }
                  className={styles.photo}
                  alt="avatar"
                />
              </div>
              <div>
                { user.followed
                  ? <button
                    onClick={()=>props.unfollow(user.id)}>
                      Unfollow
                    </button>
                  : <button
                    onClick={()=>props.follow(user.id)}>
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
        })
      }
    </div>
  );
};

export default Users;