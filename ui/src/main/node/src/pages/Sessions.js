import SessionsIcon from "@material-ui/icons/PermIdentity";
import React from "react";
import PageHome from "../app/PageHome";

const config = {
    exact: false,
    path: "/sessions",
    icon: (<SessionsIcon/>),
    title: "Sessions",
    menuBar: (<div><span>Sessions</span></div>),
    content: (<PageHome/>)
};

export {
    SessionsIcon
};
export default config;
