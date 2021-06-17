// noinspection JSUnresolvedVariable

import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {AppDispatch} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

let initialState = {
  users: [] as Array<UserType> | undefined,
  pageSize: 10,
  totalUsersCount: 0 as number | undefined,
  currentPage: 1 as number | undefined,
  isFetching: false as boolean | undefined,
  followingInProgress: [] as (number | undefined)[], // array of users id's
};

type ActionType = {
  type: string,
  userId?: number,
  users?: Array<UserType>,
  currentPage?: number,
  totalCount?: number,
  isFetching?: boolean
  isFollowing?: boolean
}

const usersReducer = (state = initialState, action: ActionType): typeof initialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return {...u, followed: true}
        //   }
        //   return u;
        // })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId: number): ActionType => ({type: FOLLOW, userId});

export const unfollowAC = (userId: number): ActionType => ({type: UNFOLLOW, userId});

export const setUsers = (users: Array<UserType>): ActionType => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage: number): ActionType => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalCount: number): ActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export const toggleIsFetching = (isFetching: boolean): ActionType => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleIsFollowing = (isFollowing: boolean, userId: number): ActionType => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userId});

export const requestUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
    dispatch(setCurrentPage(currentPage))
  }
}

const followUnfollowFlow = async (dispatch: AppDispatch, userId: number, apiMethod: Function, actionCreator: Function) => {
  dispatch(toggleIsFollowing(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowing(false, userId));
}

export const unfollow = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    // const apiMethod = usersAPI.unfollow.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowAC);
  }
}
export const follow = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    // const apiMethod = usersAPI.follow.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC);
  }
}
