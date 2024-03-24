import React from "react";
import s from "./Dialogs.module.css";
import { nanoid } from "nanoid";
import {
  sendMessageCreator,
  updateNewMassageBodyCreator,
} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (dialogsData) => {
  return {
    dialogsData:  dialogsData ,
  };
};


const DialogsContainer = connect(
  mapStateToProps,
 
)(Dialogs);

export default DialogsContainer;