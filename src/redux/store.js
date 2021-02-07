import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const myMiddleware = [thunk, createLogger()];

const store = createStore(rootReducer, applyMiddleware(...myMiddleware));

export default store;
