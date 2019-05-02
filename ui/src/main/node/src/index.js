import React from "react";
import ReactDOM from "react-dom";
//import App from "./app/App";
import App from "./layout/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import {Provider} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import "typeface-roboto";

import home from "./pages/Home";
import sessions from "./pages/Sessions";
import logout from "./pages/Logout";

const pages = [{
    target: home,
    sideBar: [sessions, logout]
}, {
    target: sessions,
    sideBar: [logout],
    backTo: [home]
}];

ReactDOM.render((<Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App pages={pages}/>
    </MuiThemeProvider>
</Provider>), document.getElementById("root"));
registerServiceWorker();
