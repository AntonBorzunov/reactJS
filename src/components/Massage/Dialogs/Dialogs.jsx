import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

const Dialogs = (Props) => {

  let dialogElement = Props.dialogsData.dialogsPage.dialogsData.map((d) => ( 
    <NavLink key={nanoid()}  to={"dialogs/" + d.id}>
     {d.name} </NavLink>
    
  ));
  return (
    <div className={s.dialogs_imges}>
      <div className={s.content}>{dialogElement }</div>
    </div>
  );
};

export default Dialogs;
// return(
//         <div className={s.dialogs_imges}>
//             <NavLink className={s.content} to={"dialogs/" + Props.state.id}>{Props.state.name}</NavLink>
//             </div>
