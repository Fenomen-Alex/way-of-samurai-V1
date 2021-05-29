import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

 let initialState = {
     posts: [
         {id:1, message:"Hi, my name's Alex", likes: "10"},
         {id:2, message:"It's my first post", likes: "15"},
         {id:3, message:"IT-Kamasutra is the best", likes: "100500"}
     ],
     profile: null,
     status: ""
 };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: [...state.posts].length+1,
                message: action.newPostText,
                likes: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getUser(userId)
              dispatch(setUserProfile(data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const status = await profileAPI.getStatus(userId)
              dispatch(setStatus(status.data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updStatus(status)
              if (data.data.resultCode === 0 ) {
                  dispatch(setStatus(status));
              }
    }
}
