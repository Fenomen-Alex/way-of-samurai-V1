import {getUserData} from "./auth-reducer";
import { RootState} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

const SET_INITIALIZED = 'SET-INITIALIZED';

const initialState = {
    initialized: false
};

type SetInitializedActionType = {
    type: typeof SET_INITIALIZED;
}

const appReducer = (state = initialState, action: SetInitializedActionType): typeof initialState => {
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

export const setInit = (): SetInitializedActionType => ({type: SET_INITIALIZED})

export const initialize = () => (dispatch: ThunkDispatch<RootState, any, Action>) => {
    const promise = dispatch(getUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInit());
        })
}
