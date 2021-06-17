import {profileAPI} from '../api/api';
import {PhotosType, PostType, ProfileType} from "../types/types";
import {AppDispatch, RootState} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, my name's Alex", likes: 10},
        {id: 2, message: "It's my first post", likes: 15},
        {id: 3, message: "IT-Kamasutra is the best", likes: 100500}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string | undefined,
    newPostText: ''
}

type ActionType = {
    type: string,
    newPostText?: string,
    profile?: ProfileType,
    status?: string,
    postId?: number,
    photos?: PhotosType
}

const profileReducer = (state = initialState, action: ActionType): typeof initialState => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: [...state.posts].length + 1,
                message: action.newPostText,
                likes: 0
            } as PostType;
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile as ProfileType
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = (newPostText: string): ActionType => ({type: ADD_POST, newPostText});

export const deletePostActionCreator = (postId: number): ActionType => ({type: DELETE_POST, postId});

export const setUserProfile = (profile: ProfileType): ActionType => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status: string): ActionType => ({type: SET_STATUS, status});

export const savePhotoSuccess = (photos: PhotosType): ActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => {
    return async (dispatch: AppDispatch) => {
        const data = await profileAPI.getUser(userId)
        dispatch(setUserProfile(data));
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: AppDispatch) => {
        const status = await profileAPI.getStatus(userId)
        dispatch(setStatus(status.data));
    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            let response = await profileAPI.updStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch (error) {
            alert(error);
        }
    }
}

export const savePhoto = (file: File) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) =>
    async (dispatch: ThunkDispatch<RootState, any, Action>, getState: Function) => {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfile(profile);

        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        }
    }
