import React from "react";
import App from "./App";
import store from "../store";
import {Provider} from "react-redux";
import * as sinon from "sinon";
import renderer from "react-test-renderer";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core";

let sandbox;

it("renders App without crashing", function () {
    renderer.create((
        <MuiThemeProvider theme={createMuiTheme({})}>
            <Provider store={store}><App/></Provider>
        </MuiThemeProvider>
    ));
});

beforeAll(() => sandbox = sinon.createSandbox());

afterAll(() => sandbox.restore());
