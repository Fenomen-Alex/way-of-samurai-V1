import React from "react";
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import App from './App';
import {addPost, newPostTextUpdate} from './redux/state';
import * as ReactDOM from "react-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                newPostTextUpdate={newPostTextUpdate}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
