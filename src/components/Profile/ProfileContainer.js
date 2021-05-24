// noinspection JSUnusedGlobalSymbols,NpmUsedModulesInstalled

import React, {Component} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.getUserProfile(this.props.userId);
    this.props.getStatus(this.props.userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose(
  withRouter, withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus})
)(ProfileContainer);
