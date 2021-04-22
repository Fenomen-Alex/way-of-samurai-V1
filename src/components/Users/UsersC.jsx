import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import ava from '../../assets/images/user_ava.png';

class UsersC extends React.Component {

  getUsers = () => {
    if (this.props.users.length === 0) {
      // eslint-disable-next-line no-unused-expressions
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(data => this.props.setUsers(data.data.items));
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.getUsers}>Get Users</button>
        {
          this.props.users.map(user => {
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
                    onClick={()=>this.props.unfollow(user.id)}>
                    Unfollow
                  </button>
                  : <button
                    onClick={()=>this.props.follow(user.id)}>
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
  }
}

export default UsersC;