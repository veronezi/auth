import ConfigIcon from "@material-ui/icons/Build";
import React from "react";
import PageConfig from "../app/PageConfig";

const config = {
    bottom: true,
    path: "/config",
    icon: (<ConfigIcon/>),
    title: "Config",
    menuBar: (<div/>),
    content: (<PageConfig/>)
};

export default config;