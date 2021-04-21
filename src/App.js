import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={()=><DialogsContainer
                        // store={props.store}
                        // dialogsPage={props.state.dialogsPage}
                        // dialogs={props.state.dialogsPage.dialogs}
                        // messages={props.state.dialogsPage.messages}
                        // text={props.state.dialogsPage.newMessageText}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path="/profile" component={()=><Profile
                        // store={props.store}
                        // profilePage={props.state.profilePage}
                        // dispatch={props.dispatch}
                        // text={props.state.profilePage.newPostText}
                    />}/>
                </div>
            </div>
    );
}

export default App;
