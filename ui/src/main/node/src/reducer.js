import {combineReducers} from "redux";
import sessions from "./reducerSessions";
import loading from "./layout/LoadingMarkerReducer";

const rootReducer = combineReducers({
    sessions,
    loading
});

export default rootReducer;
