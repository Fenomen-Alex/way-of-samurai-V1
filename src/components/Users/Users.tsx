import React from 'react';
import Pagination from '../Common/Pagination/Pagination';
import User from './User';
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChange: (p: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChange, users, followingInProgress, follow, unfollow}) => {

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
