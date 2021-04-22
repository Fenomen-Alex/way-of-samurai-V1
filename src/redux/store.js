import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const store ={
    _state: {
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
            ],
            newMessageText: "",
        },
        sidebar: {}
    },
    _callSubscriber() {},

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;