import SessionsIcon from "@material-ui/icons/PermIdentity";
import React from "react";

const config = {
    exact: false,
    path: "/sessions",
    icon: (<SessionsIcon/>),
    title: "Sessions",
    menuBar: (<div>menu bar</div>),
    content: (<div>content</div>)
};

export {
    SessionsIcon
};
export default config;
