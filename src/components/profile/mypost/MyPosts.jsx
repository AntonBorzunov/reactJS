import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import { nanoid } from "nanoid";



const MyPosts = (Props) => {

  const { postData } = Props;

  //   const { addPost } = Props;

  let postsElements = postData.map(p => (
    <Post key={nanoid()} message={p.message} likesCount={p.likesCount} />
  )); 

  let newPostElement = React.createRef();

  let onAddPost = () => {
    Props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let text =  e.target.value;
    Props.updateNewPostText(text);
    
    // Props.dispatch(action);
    // let action = updateNewPostTextActionCreator(text);
    // Props.handleCallSubscriber()
  };

  return (
    <div className="Wrapper">
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={Props.newPostText}
        className={s.textarea}
      />
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;

//   let postData =[
//     {id: 1, massage: 'Hi, how are you?', likesCount:'10'},
//     {id: 2, massage: '... my first post ', likesCount:'15'}
// ]
