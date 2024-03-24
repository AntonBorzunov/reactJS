import React from "react";
import s from "./Massages.module.css";
import { nanoid } from "nanoid";
// import {
//   sendMessageCreator,
//   updateNewMassageBodyCreator,
// } from "../../../Redux/dialogs-reducer";

const Massages = (Props) => {
 
  // let state = Props.messageData;
  console.log(Props)


  let messagesElement = Props.messagesData.dialogsPage.messagesData.map((m) => (
    <div key={nanoid()}>{m.message}</div>
  ));

  let newMessagesElement = React.createRef();

  let addPost = () => {
    Props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    Props.updateNewMassageBody(body);
  };

  return (
    <div className={s.massage_imges}>
      <div className={s.messages}>{messagesElement}</div>
      <div>
        <textarea
          value={Props.newMessagesBody}
          ref={newMessagesElement}
          onChange={onNewMessageChange}
          className={s.textarea}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default Massages;
