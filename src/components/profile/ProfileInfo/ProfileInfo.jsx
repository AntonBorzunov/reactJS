import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (Props) =>{
    return (
        <div className={s.content}>
          
    <img className={s.images} src={Props.img}></img>
    </div>
    )
}

export default ProfileInfo