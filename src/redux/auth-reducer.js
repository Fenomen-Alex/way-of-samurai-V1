import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default authReducer;

export const setUserData = (id, email, login, isAuth) =>
  ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getUserData = () => (dispatch) => {
  return authAPI.me()
    .then(res => {
      if (res.resultCode === 0) {
        let {email, id, login,} = res.data;
        dispatch(setUserData(id, email, login, true));
      }
    })
}


export const login = (email, password, rememberMe) => (dispatch) => {
  return authAPI.login(email, password, rememberMe)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(getUserData());
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(res => {
    if (res.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  })
}
