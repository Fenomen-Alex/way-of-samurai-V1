import React from 'react';
import styles from './Users.module.css';
import ava from '../../assets/images/user_ava.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {/* eslint-disable-next-line array-callback-return */}
        {pages.map((p, index) => {
          if (p <= 25) {
            return (
              <span key={index}
                onClick={() => props.onPageChange(p)}
                className={props.currentPage === p ? styles.selected : ""}
              >{p}
            </span>
            )
          }
        })}

      </div>
      {
        props.users.map(user => {
          return <div key={user.id}>
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
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => props.unfollow(user.id)}
                    >
                    Unfollow
                  </button>
                  : <button
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => props.follow(user.id)}>
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
