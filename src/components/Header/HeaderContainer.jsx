// noinspection JSUnusedGlobalSymbols

import React, {Component} from 'react';
import Header from './Header';
import {setUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {getAuthMe} from '../../api/api';

class HeaderContainer extends Component {
  componentDidMount() {
    getAuthMe().then(data => {
        if (data.resultCode === 0) {
          this.props.setUserData(data.data);
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);
