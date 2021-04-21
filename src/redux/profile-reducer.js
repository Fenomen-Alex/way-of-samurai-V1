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
            let newPost = {
                id: state.posts.length,
                message: state.newPostText,
                likes: "0"
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case update:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({type: addPost});

export const textChangeActionCreator = (text) =>
    ({type: update, newText: text});