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
                id: state.messages.length,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case messageText:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageActionCreator = () => ({type: sendMessage});

export const messageTextActionCreator = (text) =>
    ({type: messageText, newText: text});