import { SET_User,  SET_SELECTED_User, SET_Find_User} from "./action";
import { produce } from "immer";


const initialState = {
  users: null,
  findusers: null,
  usersecleted: null,
  
  
};

// shallow
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_User: {
      const nextState = produce(state, (draft) => {
        draft.users = action.payload;
      });
      return nextState;
    }

    case SET_Find_User: {
      const nextState = produce(state, (draft) => {
        draft.findusers = action.payload;
      });
      return nextState;
    }

    case SET_SELECTED_User: {
      const nextState = produce(state, (draft) => {
        draft.usersecleted = action.payload;
      });
      return nextState;
    }
  

   

    default:
      return state;
  }
};

export default reducer;
