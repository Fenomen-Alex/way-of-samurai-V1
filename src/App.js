import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={()=><Dialogs
                        dialogsPage={props.state.dialogsPage}
                        // dialogs={props.state.dialogsPage.dialogs}
                        // messages={props.state.dialogsPage.messages}
                        // text={props.state.dialogsPage.newMessageText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/profile" component={()=><Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                        // text={props.state.profilePage.newPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
