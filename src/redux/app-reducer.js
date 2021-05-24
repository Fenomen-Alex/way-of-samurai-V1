import {getUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export default appReducer;

export const setInit = () => ({type: SET_INITIALIZED})

export const initialize = () => (dispatch) => {
  const promise = dispatch(getUserData());
  promise.then(() => {
    dispatch(setInit());
  })
}
