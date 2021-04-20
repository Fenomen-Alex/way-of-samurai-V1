import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, messageTextActionCreator} from "../../redux/dialogs-reducer"


const Dialogs = (props) => {

    let newMessageText = props.dialogsPage.newMessageText

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const textChange = (e) => {
        let text = e.target.value;
        props.dispatch(messageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(item => <DialogItem
                    key={item.id}
                    name={item.name}
                    id={item.id} />
                )}
            </div>
            <div className={s.messages}>
                <div>
                    {props.dialogsPage.messages.map(item => <Message
                    key={item.id}
                    message={item.message}/>
                    )}
                </div>
            </div>
            <div>
                <div>
                    <textarea
                        placeholder="Enter your message"
                        onChange={textChange}
                        value={newMessageText}
                        autoFocus
                        onFocus={(e) => {
                            let val = e.target.value;
                            e.target.value = '';
                            e.target.value = val;
                        }}
                    />
                </div>
                <div>
                    <button onClick={sendMessage} >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;