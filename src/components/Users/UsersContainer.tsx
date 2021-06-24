// noinspection JSUnusedGlobalSymbols
import React, {useEffect} from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
  follow, requestUsers, toggleIsFollowing, unfollow
} from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/preloader';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalCount,
  getUsers
} from '../../redux/users-selectors';
import {UserType} from "../../types/types";
import {RootState} from "../../redux/redux-store";
import {compose} from "redux";

// type PropsType = {
//   currentPage: number
//   getUsers: (currentPage: number, pageSize: number) => void
//   pageSize: number
//   isFetching: boolean
//   totalUsersCount: number
//   onPageChange: (p: number) => void
//   users: Array<UserType>
//   followingInProgress: Array<number>
//   follow: (id: number) => void
//   unfollow: (id: number) => void
// }

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  toggleIsFollowing: (isFollowing: boolean, userId: number) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType

const UsersContainer: React.FC<PropsType> = (props) => {
  const { getUsers, currentPage, pageSize, isFetching } = props;
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [])

  const onPageChange = (p: number) => {
    getUsers(p, pageSize);
  }
  return <>
    {isFetching ? <Preloader/> : null}
    <Users {...props} onPageChange={onPageChange}/>
  </>
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  } as MapStatePropsType
}

const UsersCont = compose(connect<MapStatePropsType, MapDispatchPropsType, null, RootState>(mapStateToProps, {
  follow, toggleIsFollowing, getUsers: requestUsers, unfollow
}))(UsersContainer)

export default UsersCont;
