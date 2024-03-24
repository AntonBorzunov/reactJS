import React from "react";
import s from "./Massage.module.css";
import MassagesContainer from "./Massages/MassagesContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Massage = (Props) => {
 
  

  return (
    <div className={s.dialog}>
      <DialogsContainer />
      <MassagesContainer />
    </div>
  );
};

export default Massage;
