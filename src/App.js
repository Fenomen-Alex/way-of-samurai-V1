import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, Redirect, withRouter} from "react-router-dom";
import UsersCont from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/preloader";
import {initialize} from "./redux/app-reducer";
import store from "./redux/redux-store";
import withSuspense from "./components/HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class SamuraiJSApp extends React.Component {

  catchAllUnhandledErrors = () => {
    alert("Some error occurred");
    //console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initialize();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={"/profile"}/>}/>

            <Route path='/dialogs'
                   render={withSuspense(DialogsContainer)}/>

            <Route path='/profile/:userId?'
                   render={withSuspense(ProfileContainer)}/>

            <Route path='/users'
                   render={() => <UsersCont/>}/>

            <Route path='/login'
                   render={() => <Login/>}/>

            <Route path='*'
                   render={() => <div>404 NOT FOUND</div>}/>
          </Switch>

          {/*<Route path="/dialogs"*/}
          {/*       component={withSuspense(DialogsContainer)}*/}
          {/*/>*/}
          {/*<Route path="/profile/:userId?"*/}
          {/*       component={withSuspense(ProfileContainer)}*/}
          {/*/>*/}
          {/*<Route path="/users"*/}
          {/*       component={() => <UsersCont/>}*/}
          {/*/>*/}
          {/*<Route path="/login"*/}
          {/*       component={() => <Login/>}*/}
          {/*/>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initialize}))(SamuraiJSApp);

const App = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
};

export default App;
