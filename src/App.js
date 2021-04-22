import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           component={()=><DialogsContainer />}
                    />
                    <Route path="/profile"
                           component={()=><Profile />}
                    />
                </div>
            </div>
    );
}

export default App;
