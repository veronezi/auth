import HomeIcon from "@material-ui/icons/Home";
import React from "react";

const config = {
    exact: true,
    path: "/",
    icon: (<HomeIcon/>),
    title: "Auth",
    menuBar: (<div><span>Home</span></div>),
    content: (<div style={{backgroundColor: "pink", width: "100%", height: "100%"}}/>)
};

export default config;