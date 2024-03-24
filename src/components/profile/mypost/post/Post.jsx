import React from 'react';
import s from './Post.module.css';
const Post = ({message, likesCount}) => {
    return<div>
      <div className={s.posts}>
        <img src="https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg" alt="" />
        <div className={s.item}>
        { message }
        </div>
        { likesCount }
 </div>
 </div>
}

export default Post