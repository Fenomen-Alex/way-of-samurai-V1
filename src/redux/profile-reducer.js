const ADD_POST = 'ADD-POST';
const UPDATE = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

 let initialState = {
     posts: [
         {id:1, message:"Hi, my name's Alex", likes: "10"},
         {id:2, message:"It's my first post", likes: "15"},
         {id:3, message:"IT-Kamasutra is the best", likes: "100500"}
     ],
     newPostText: "",
     profile: null
 };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: [...state.posts].length+1,
                message: state.newPostText,
                likes: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };

        case UPDATE:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});

export const textChangeActionCreator = (text) =>
    ({type: UPDATE, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
