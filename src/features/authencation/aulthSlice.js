import {  SET_Profile_User } from "./action";
import { produce } from "immer";

const initialState = {
  profile: null,
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case SET_Profile_User:
      return produce(state, (draft) => {
        draft.profile = action.payload;
      });

    default:
      return state;
  }
};

export default reducer;
