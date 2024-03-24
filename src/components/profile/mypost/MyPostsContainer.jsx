import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import { nanoid } from "nanoid";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  
  return {
    postData: state.profilePage.postData ,
    newPostText:state.profilePage.newPostText
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


//   let postData =[
//     {id: 1, massage: 'Hi, how are you?', likesCount:'10'},
//     {id: 2, massage: '... my first post ', likesCount:'15'}
// ]
