import injectSheet from "react-jss";
import {collapsedLeftSize, expandedLeftSize, headerSize, transitionDuration} from "./CommonStyles";

const styles = () => ({
    "@global": {
        "body": {
            margin: 0,
            padding: 0,
            height: "100vh",
        },
        "#root": {
            height: "100vh",
        },
    },
    root: {
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        "&.fade-appear": {
            opacity: 0
        },
        "&.fade-appear-active": {
            transition: `opacity ${transitionDuration * 2}ms linear`,
            opacity: 1
        },
        "& .left": {
            position: "relative",
            transition: `width ${transitionDuration}ms linear`,
            width: expandedLeftSize,
        },
        "& .right": {
            flexGrow: 1
        },
        "&.hidden-enter, &.hidden-enter-active, &.hidden-enter-done": {
            "& .left": {
                overflow: "hidden",
                width: 0
            },
        },
    },
    hiddenPanel: {},
    collapsedPanel: {
        "& .left": {
            position: "relative",
            width: collapsedLeftSize,
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