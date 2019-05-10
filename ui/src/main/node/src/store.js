import {combineReducers, createStore} from "redux";
import sessions from "./reducerSessions";
import {LoadingMarkerReducer as loading} from "veronezi-samples-common-ui";

const rootReducer = combineReducers({
    sessions,
    loading
});

const store = createStore(rootReducer);
export default store;