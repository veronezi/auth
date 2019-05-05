import {combineReducers} from "redux";
import sessions from "./reducerSessions";
import {LoadingMarkerReducer as loading} from "./library";

const rootReducer = combineReducers({
    sessions,
    loading
});

export default rootReducer;
