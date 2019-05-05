import {combineReducers, createStore} from "redux";
import sessions from "./reducerSessions";
import {LoadingMarkerReducer as loading} from "./library";

const rootReducer = combineReducers({
    sessions,
    loading
});

const store = createStore(rootReducer);
export default store;