import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// ! Redux
//   We will be using Redux to store state and manage state in our application
//   We will be using Redux Toolkit to create our store and reducers
// ! We have 5 steps to create a store and reducers using Redux Toolkit
// * 1. Import the all important components from redux and react-redux and redux-devtools-extension
//  Done Above already.
// * 2. Create a reducer function
// every action have Payload and Type Example={type:'LOGIN',payload:{username:'admin',password:'1234'}}
const authReducer = (state = {type:"LOGIN",role:"Seller"}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload.username };
    case "LOGOUT":
      return action.payload.username;
    default:
      return state;
  }
};
// * 3. Combine all reducers into one reducer function
const rootReducer = combineReducers({
  user: authReducer,
});
// * 4. Create a store using the reducer function
const store = createStore(rootReducer, composeWithDevTools());
// *5 provide the store to entire application using react-redux Provider
export default store;