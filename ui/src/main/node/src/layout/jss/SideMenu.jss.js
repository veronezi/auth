import injectSheet from "react-jss";
import {collapsedLeftSize, expandedLeftSize, padding, grey, transitionDuration} from "./CommonStyles";

const styles = (theme) => ({
    root: {
        backgroundColor: grey,
        position: "relative",
        overflow: "hidden",
        width: expandedLeftSize,
        height: "100%",
        transition: `width ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.standard}ms`,
    },
    panelCollapsed: {
        width: collapsedLeftSize
    },
    content: {
        position: "absolute",
        top: "40px",
        bottom: padding,
        left: padding,
        right: padding,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&.slide-enter": {
            transition: `transform ${transitionDuration}ms ease-in-out`,
            transform: "translate(100%)",
        },
        "&.slide-enter-active": {
            transform: "translate(0)",
        },
        "&.slide-exit-active": {
            transform: "translate(100%)",
        },
        "&.slide-exit": {
            transition: `transform ${transitionDuration}ms ease-in-out`,
            transform: "translate(-100%)",
        },
    },
    linkCollapsed: {
        display: "none"
    }
});

export default ((cls) => injectSheet(styles)(cls));