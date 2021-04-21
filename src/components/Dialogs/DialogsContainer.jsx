import React from 'react';
import {sendMessageActionCreator, messageTextActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                const textChange = (text) => {
                    store.dispatch(messageTextActionCreator(text));
                }
                return (
                <Dialogs
                    dialogsPage={state}
                    sendMessage={sendMessage}
                    textChange={textChange}
                />)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;