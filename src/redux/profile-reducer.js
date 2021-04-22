const addPost = 'ADD-POST';
const update = 'UPDATE-NEW-POST-TEXT';

 let initialState = {
     posts: [
         {id:1, message:"Hi, my name's Alex", likes: "10"},
         {id:2, message:"It's my first post", likes: "15"},
         {id:3, message:"IT-Kamasutra is the best", likes: "100500"}
     ],
     newPostText: ""
 };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
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

        case update:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({type: addPost});

export const textChangeActionCreator = (text) =>
    ({type: update, newText: text});