// noinspection JSUnusedGlobalSymbols,NpmUsedModulesInstalled

import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    const sendMessage = (values) => {
        console.log(values);
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(item => <DialogItem
                    key={item.id}
                    name={item.name}
                    id={item.id} />
                )}
            </div>
            <div className={s.messages}>
                <div>
                    {state.messages.map(item => <Message
                    key={item.id}
                    message={item.message}/>
                    )}
                </div>
            </div>
            <AddMessageForm onSubmit={sendMessage} />
        </div>
    )
}

export default Dialogs;
