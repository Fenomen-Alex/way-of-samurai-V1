// noinspection JSUnusedGlobalSymbols

import Users from './Users';
import {connect} from 'react-redux';
import {
  follow, requestUsers, toggleIsFollowing, unfollow
} from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/preloader';
import { usersSuperSelector } from "../../redux/users-selectors";

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
  return usersSuperSelector(state);
}

const UsersCont = connect(mapStateToProps, {
  follow, toggleIsFollowing, getUsers: requestUsers, unfollow
})(UsersContainer)

export default UsersCont;
