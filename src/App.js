import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersCont from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs"
               component={() => <DialogsContainer/>}
        />
        <Route path="/profile/:userId?"
               component={() => <ProfileContainer/>}
        />
        <Route path="/users"
               component={() => <UsersCont/>}
        />
        <Route path="/login"
               component={() => <Login />}
        />
      </div>
    </div>
  );
}

export default App;
