import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import ava from '../../assets/images/user_ava.png';

const Users = (props) => {

  if (props.users.length === 0) {
    // eslint-disable-next-line no-unused-expressions
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
      .then(data => {
        props.setUsers(data.data.items);
        props.setTotalUsersCount(data.data.totalCount);
      });
  }

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const onPageChange = (p) => {
    props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`)
      .then(data => {
        props.setUsers(data.data.items);
      });
  }
  return (
    <div>
      <div>
        {pages.map(p => {
          if ( p <= 25) {
            return (
              <span
                onClick={(e) => onPageChange(p)}
                className={props.currentPage === p && styles.selected}
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
                <img
                  src={user.photos.small !== null
                    ? user.photos.small
                    : ava}
                  className={styles.photo}
                  alt="avatar"
                />
              </div>
              <div>
                {user.followed
                  ? <button
                    onClick={() => props.unfollow(user.id)}>
                    Unfollow
                  </button>
                  : <button
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
