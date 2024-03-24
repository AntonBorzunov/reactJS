import React from "react";
import s from "./Massages.module.css";
import { nanoid } from "nanoid";
import {
  sendMessageCreator,
  updateNewMassageBodyCreator,
} from "../../../Redux/dialogs-reducer";
import Messages from "./Massages";
import { connect } from "react-redux";

let mapStateToProps = (messagesData) => {
  return {
    messagesData:  messagesData ,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMassageBody: (body) => {
      dispatch(updateNewMassageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};
const MassagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MassagesContainer;
