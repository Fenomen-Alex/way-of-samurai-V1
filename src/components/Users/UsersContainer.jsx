import Users from './Users';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Preloader from '../Common/Preloader/preloader';

const UsersContainer = (props) => {
  if (props.users.length === 0) {
    props.toggleIsFetching(true);
    // eslint-disable-next-line no-unused-expressions
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
      .then(data => {
        props.setUsers(data.data.items);
        props.setTotalUsersCount(data.data.totalCount);
        props.toggleIsFetching(false);
      });
  }
  const onPageChange = (p) => {
    props.setCurrentPage(p);
    props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`)
      .then(data => {
        props.setUsers(data.data.items);
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
    />
  </>
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)
