const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MASSAGE_BODY = "UPDATE_NEW_MASSAGE_BODY";
let initialState = {
  
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
  
    
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody; // Используйте новое сообщение из action.body
      state.newMessageBody = ""; // Очистите поле newMessageBody после отправки
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE  })
export const updateNewMassageBodyCreator = (body) => 
({ type: UPDATE_NEW_MASSAGE_BODY, body: body })

export default dialogsReducer;
