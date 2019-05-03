import injectSheet from "react-jss";
import {headerSize, expandedLeftSize, collapsedLeftSize, transitionDuration} from "./CommonStyles";

const global = {
    "body": {
        margin: 0,
        padding: 0,
        height: "100vh",
    },
    "#root": {
        height: "100vh",
    },
};

const styles = () => ({
    "@global": global,
    root: {
        height: `calc(100vh - ${headerSize})`,
        display: "flex",

        "&.fade-appear": {
            opacity: 0
        },
        "&.fade-appear-active": {
            transition: `opacity ${transitionDuration * 2}ms linear`,
            opacity: 1
        },
        "&.hiddenPanel": {
            position: "relative",
            "& .left": {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: expandedLeftSize

            },
            "& .right": {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: expandedLeftSize,
                right: 0
            },
            "&.collapsedPanel": {
                "& .left": {
                    width: collapsedLeftSize

                },
                "& .right": {
                    left: collapsedLeftSize,
                },
            },
        },
        "& .left": {
            position: "relative",
        },
        "& .right": {
            flexGrow: 1
        },

    },
    top: {
        height: headerSize,
    },
    collapseBtn: {
        position: "absolute",
        top: `calc(${headerSize} + 10px)`,
        right: -9,
        padding: 0,
        minWidth: "auto",
        transform: "rotate(45deg)",
        zIndex: 1000,
    },
    collapseIcon: {
        transform: "rotate(-45deg)",
        fontSize: 18,
    },
});

export default ((cls) => injectSheet(styles)(cls));