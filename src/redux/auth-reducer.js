import {getAuthMe} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

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
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export default authReducer;

export const setUserData = (data) => ({type: SET_USER_DATA, data})

export const getUserData = () => {
  return (dispatch) => {
    getAuthMe().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data));
      }
    })
  }
}
