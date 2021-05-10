// noinspection JSUnusedGlobalSymbols

import React, {Component} from 'react';
import Header from './Header';
import {getUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getUserData();
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

export default connect(mapStateToProps, {getUserData}) (HeaderContainer);
