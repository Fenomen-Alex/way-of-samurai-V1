// noinspection JSUnusedGlobalSymbols

import Users from './Users';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowing,
  unfollow
} from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/preloader';
import {getUsers} from '../../api/api';

const UsersContainer = (props) => {
  if (props.users.length === 0) {
    props.toggleIsFetching(true);
      getUsers(props.currentPage, props.pageSize).then(data => {
        props.setUsers(data.items);
        props.setTotalUsersCount(data.totalCount);
        props.toggleIsFetching(false);
      });
  }
  const onPageChange = (p) => {
    props.setCurrentPage(p);
    props.toggleIsFetching(true);
    getUsers(p,props.pageSize)
      .then(data => {
        props.setUsers(data.items);
        props.toggleIsFetching(false)
      });
  }
  return <>
    {props.isFetching ? <Preloader/> : null}
    <Users
      users={props.users}
      follow={props.follow}
      unfollow={props.unfollow}
      totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      onPageChange={onPageChange}
      followingInProgress={props.followingInProgress}
      isFollowing={props.toggleIsFollowing}
    />
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowing
})(UsersContainer)

export default UsersCont;
