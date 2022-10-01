import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import authReducer from "../features/authencation/aulthSlice";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
 
  auth: authReducer,
//   room: roomReducer,
//   user: userReducer,
//   comment:commentReducer,
});

// middleware: lưu log những action đc gửi lên store
const logger = (state) => {
  return (next) => {
    return (action) => {
      // xử lý action
      const actionList = localStorage.getItem("actionList");
      if (!actionList) {
      } else {
        const actionListArr = JSON.parse(actionList);
        actionListArr.push(action);
      }

      next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
