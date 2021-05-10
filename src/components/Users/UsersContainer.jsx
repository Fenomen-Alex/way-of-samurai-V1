// noinspection JSUnusedGlobalSymbols

import Users from './Users';
import {connect} from 'react-redux';
import {
  follow, getUsers, toggleIsFollowing, unfollow
} from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/preloader';

const UsersContainer = (props) => {
  if (props.users.length === 0) {
    props.getUsers(props.currentPage, props.pageSize);
  }
  const onPageChange = (p) => {
    props.getUsers(p, props.pageSize);
  }
  return <>
    {props.isFetching ? <Preloader/> : null}
    <Users {...props} onPageChange={onPageChange} />
  </>
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }

const UsersCont = connect(mapStateToProps, {
  follow, toggleIsFollowing, getUsers, unfollow
})(UsersContainer)

export default UsersCont;
