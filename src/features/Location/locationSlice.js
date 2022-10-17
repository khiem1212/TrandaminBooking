import { SET_Location,  SET_SELECTED_Location, SET_Find_Location} from "./action";
import { produce } from "immer";


const initialState = {
  location: null,
  findlocation: null,
  locationecleted: null,
  
  
};

// shallow
const locationreducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_Location: {
      const nextState = produce(state, (draft) => {
        draft.location = action.payload;
      });
      return nextState;
    }

    case SET_Find_Location: {
      const nextState = produce(state, (draft) => {
        draft.findlocation = action.payload;
      });
      return nextState;
    }

    case SET_SELECTED_Location: {
      const nextState = produce(state, (draft) => {
        draft.locationecleted = action.payload;
      });
      return nextState;
    }
  

   

    default:
      return state;
  }
};

export default locationreducer;
