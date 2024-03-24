const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
    

    postData: [
      { id: 1, message: "Hi, how are you?", likesCount: 10 },
      { id: 2, message: "... my first post ", likesCount: 15 },
    ],
    newPostText: "", // Добавляем новое свойство для хранения текста нового поста
 
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state = {
        ...state,
        newPostText: (state.newPostText = action.newText), // Обновляем newPostText в state
      };
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = (text) => ({
  type: ADD_POST,
  newText: text,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
