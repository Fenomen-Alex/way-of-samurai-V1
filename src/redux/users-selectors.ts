import {createSelector} from 'reselect';
import {RootState} from "./redux-store";

export const getUsers = (state: RootState) => {
  return state.usersPage.users
}

export const getPageSize = (state: RootState) => {
  return state.usersPage.pageSize
}

export const getTotalCount = (state: RootState) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootState) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: RootState) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootState) => {
  return state.usersPage.followingInProgress
}

export const usersSuperSelector = createSelector(
  [getUsers, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress],
  ( users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress ) => {
    return {
      users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress
    }
  })
