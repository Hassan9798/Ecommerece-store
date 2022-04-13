import RootReducer from "./reducers";
import { createStore } from "redux";
const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;