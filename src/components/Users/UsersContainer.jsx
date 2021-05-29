// noinspection JSUnusedGlobalSymbols

import Users from './Users';
import {connect} from 'react-redux';
import {
  follow, requestUsers, toggleIsFollowing, unfollow
} from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/preloader';
import {usersSuperSelector} from "../../redux/users-selectors";
import {useEffect} from "react";

const UsersContainer = (props) => {
  const { getUsers, currentPage, pageSize, isFetching } = props;
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [])

  const onPageChange = (p) => {
    getUsers(p, pageSize);
  }
  return <>
    {isFetching ? <Preloader/> : null}
    <Users {...props} onPageChange={onPageChange}/>
  </>
}

let mapStateToProps = (state) => {
  return usersSuperSelector(state);
}

const UsersCont = connect(mapStateToProps, {
  follow, toggleIsFollowing, getUsers: requestUsers, unfollow
})(UsersContainer)

export default UsersCont;
