import { SET_Room,  SET_SELECTED_Room, SET_Find_Room, SET_Coment_Room} from "./action";
import { produce } from "immer";


const initialState = {
  rooms: null,
  findroom: null,
  roomsecleted: null,
  comments:null
  
};

// shallow
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_Room: {
      const nextState = produce(state, (draft) => {
        draft.rooms = action.payload;
      });
      return nextState;
    }

    case SET_Find_Room: {
      const nextState = produce(state, (draft) => {
        draft.findroom = action.payload;
      });
      return nextState;
    }

    case SET_SELECTED_Room: {
      const nextState = produce(state, (draft) => {
        draft.roomsecleted = action.payload;
      });
      return nextState;
    }
    case SET_Coment_Room: {
      const nextState = produce(state, (draft) => {
        draft.comments = action.payload;
      });
      return nextState;
    }

   

    default:
      return state;
  }
};

export default reducer;
