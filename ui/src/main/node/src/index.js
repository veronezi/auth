import React from "react";
import ReactDOM from "react-dom";
import {App} from "./library";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import {Provider} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import "typeface-roboto";

import config from "./appConfig";

ReactDOM.render((<Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App config={config}/>
    </MuiThemeProvider>
</Provider>), document.getElementById("root"));
registerServiceWorker();
