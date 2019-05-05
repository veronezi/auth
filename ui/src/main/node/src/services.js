import store from "./store";
import {getInstance} from "./layout/Rest";
import {EVENTS_LIST_UPDATED} from "./reducerSessions";

const instance = getInstance(store);
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