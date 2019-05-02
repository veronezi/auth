import HomeIcon from "@material-ui/icons/Home";
import React from "react";

const config = {
    exact: true,
    path: "/",
    icon: (<HomeIcon/>),
    title: "Home",
    menuBar: (<div>menu bar</div>),
    content: (<div>content</div>)
};

export default config;