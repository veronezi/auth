import store from "./store";
import {getRestInstance} from "veronezi-samples-common-ui";
import {EVENTS_LIST_UPDATED} from "./reducerSessions";

const instance = getRestInstance(store);
const getSessions = (page, pageSize) => instance.get(`/api/sessions/${page}/${pageSize}`).then(resp => {
    store.dispatch({
        type: EVENTS_LIST_UPDATED,
        payload: resp.data
    });
});
const authenticate = (user, password) => instance.post("/api/auth", {
    username: user,
    password
});

export {
    getSessions,
    authenticate
};