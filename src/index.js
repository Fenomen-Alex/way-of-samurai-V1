import React from "react";
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./storeContext";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <StoreContext.Provider value={store}>
            <App
              // state={state}
              // dispatch={store.dispatch.bind(store)}
              // store={store}
            />
          </StoreContext.Provider>
        </BrowserRouter>
      </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
