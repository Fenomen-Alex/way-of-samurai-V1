const sendMessage = 'SEND-MESSAGE';

type DialogType = {id: number, name: string};
type MessageType = {id: number, message: string};

let initialState = {
    dialogs: [
        {id: 1, name: "ALex"},
        {id: 2, name: "Xena"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Helen"},
    ]as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "React is awesome!"},
        {id: 3, message: "IT-Kamasutra is the best"}
    ] as Array<MessageType>,
};

type ActionType = {
    type: string,
    newMessageText: string
}

const dialogsReducer =
    (state = initialState, action: ActionType): typeof initialState => {

    switch (action.type) {
        case sendMessage:
            let newMessage = {
                id: [...state.messages].length+1,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageActionCreator = (newMessageText: string): ActionType => ({type: sendMessage, newMessageText});
