import {authAPI, securityAPI} from '../api/api';
import {AppDispatch, RootState} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null // if null, then captcha is not required
}

type ActionType = {
  type: string,
  payload: {
    id?: number | null,
    email?: string | null,
    login?: string | null,
    isAuth?: boolean,
    captchaUrl?: string | null
  }
}

const authReducer = (state = initialState, action: ActionType): typeof initialState => {
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

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): ActionType =>
  ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl: string): ActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const getUserData = () => async (dispatch: AppDispatch) => {
  const res = await authAPI.me()
  if (res.resultCode === 0
  ) {
    let {email, id, login,} = res.data;
    dispatch(setUserData(id, email, login, true));
  }
}

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: ThunkDispatch<RootState, any, Action>) => {
  const res = await authAPI.login(email, password, rememberMe, captcha)
      if (res.data.resultCode === 0) {
        dispatch(getUserData());
      } else if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
}

export const logout = () => async (dispatch: AppDispatch) => {
  const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
}
