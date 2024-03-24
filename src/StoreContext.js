
import React from "react";
import { combineReducer, createContext } from "redux";
import profileReducer from "./Redux/profile-reducer";
import dialogsReducer from "./Redux/dialogs-reducer";
import sidebarReducer from "./Redux/sidebar-reducer";
let redusers = combineReducer ({
profilePage: profileReducer,
dialogsPage: dialogsReducer,
sidebar: sidebarReducer
});
let StoreContext = React.createContext(null);


export default StoreContext