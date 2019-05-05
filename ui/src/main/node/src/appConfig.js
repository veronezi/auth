import home from "./pages/Home";
import config from "./pages/Config";
import sessions from "./pages/Sessions";
import logout from "./pages/Logout";

const appConfig = {
    storagePrefix: "auth-",
    init: {
        collapsed: true,
    },
    pages: [{
        target: home,
        sideBar: [sessions, config, logout]
    }, {
        target: sessions,
        sideBar: [logout],
        backTo: home
    }, {
        target: config,
        sideBar: [logout],
        backTo: home
    }]
};

export default appConfig;