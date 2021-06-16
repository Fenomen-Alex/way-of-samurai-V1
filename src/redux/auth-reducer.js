import {authAPI, securityAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const getUserData = () => async (dispatch) => {
  const res = await authAPI.me()
  if (res.resultCode === 0
  ) {
    let {email, id, login,} = res.data;
    dispatch(setUserData(id, email, login, true));
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const res = await authAPI.login(email, password, rememberMe, captcha)
      if (res.data.resultCode === 0) {
        dispatch(getUserData());
      } else if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
}

export const logout = () => async (dispatch) => {
  const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
}
