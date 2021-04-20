let rerender = () => {

}

let state = {
    profilePage: {
        posts: [
            {id:1, message:"Hi, my name's Alex", likes: "10"},
            {id:2, message:"It's my first post", likes: "15"},
            {id:3, message:"IT-Kamasutra is the best", likes: "100500"}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "ALex"},
            {id: 2, name: "Xena"},
            {id: 3, name: "Andrew"},
            {id: 4, name: "Helen"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "React is awesome!"},
            {id: 3, message: "IT-Kamasutra is the best"}
        ]
    }

};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: "0"
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerender(state);
};

export const newPostTextUpdate = (newText) => {
    state.profilePage.newPostText = newText;
    rerender(state);
};

export const subscribe = (observer) => {
    rerender = observer
}

export default state;