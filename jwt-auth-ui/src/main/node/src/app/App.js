import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import jss from "./App.jss";
import PageHome from "./PageHome";

const App = () => (
    <BrowserRouter>
        <Route path="/" component={PageHome}/>
    </BrowserRouter>
);

export default jss(App);
