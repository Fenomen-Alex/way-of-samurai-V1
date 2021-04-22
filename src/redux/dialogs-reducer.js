const sendMessage = 'SEND-MESSAGE';
const messageText = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case sendMessage:

            let newMessage = {
                id: [...state.messages].length+1,
                message: state.newMessageText
            };
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage]
            };
        case messageText:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageActionCreator = () => ({type: sendMessage});

export const messageTextActionCreator = (text) =>
    ({type: messageText, newText: text});