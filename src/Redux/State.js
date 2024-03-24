import rerenderEntireTree from "..";
import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReduser from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 10 },
        { id: 2, message: "... my first post ", likesCount: 15 },
      ],
      newPostText: "", // Добавляем новое свойство для хранения текста нового поста
    },
    messagePage: {
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "You " },
        { id: 3, message: "Yo" },
      ],
      newMessageBody: ""
    },
    sidebar:{

    },
  },
  
  _callSubscriber(state) {
    rerenderEntireTree(state)
    // console.log("state is changed",this._state);
  },

  getState() {
    return this._state;
  },

  dispatch(action) { // {type: 'ADD-POST'}

    this._state.profilePage = profileReduser(this._state.profilePage,action)
    this._state.messagePage = dialogsReduser(this._state.messagePage,action)
    this._state.sidebar = sidebarReduser(this._state.sidebar,action)

   
      this._callSubscriber(this._state);

 }
}

// let rerenderEntireTree = () => {
    
//   }
  



export default store;
window.store = store;


