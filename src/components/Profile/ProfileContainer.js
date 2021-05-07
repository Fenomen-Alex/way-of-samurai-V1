import React, {Component} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {getUser} from '../../api/api';

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
      getUser(userId)
      .then(data => {
        this.props.setUserProfile(data);
      });
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainerWithUrl);
