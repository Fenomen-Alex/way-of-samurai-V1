import React from 'react';
import Pagination from '../Common/Pagination/Pagination';
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChange, users, followingInProgress, follow, unfollow}) => {

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
      {
        users.map(user => {
          return <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        })
      }
    </div>
  );
};

export default Users;
