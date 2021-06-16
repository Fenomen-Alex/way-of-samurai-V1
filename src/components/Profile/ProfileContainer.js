// noinspection JSUnusedGlobalSymbols,NpmUsedModulesInstalled

import React, {Component} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {

    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId ) {
      this.refreshProfile();
    }
  }


  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        getUserProfile={this.props.getUserProfile}
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
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile})
)(ProfileContainer);
