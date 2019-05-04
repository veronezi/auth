import injectSheet from "react-jss";
import {headerSize, expandedLeftSize, collapsedLeftSize, transitionDuration, transitionHideDuration} from "./CommonStyles";

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





        "&.hiddenPanel, &.hidden-exit, &.hidden-exit-active, &.hidden-enter, &.hidden-enter-active": {
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
                width: `calc(100% - ${expandedLeftSize})`,
                right: 0
            },
            "& .left, & .right": {
                transition: `transform ${transitionHideDuration}ms linear, width ${transitionHideDuration}ms linear`,
            },
            "&.collapsedPanel": {
                "& .left": {
                    width: collapsedLeftSize

                },
                "& .right": {
                    width: `calc(100% - ${collapsedLeftSize})`,
                },
            },
        },



        "&.hidden-enter-active, &.hidden-enter-done": {
            "& .left": {
                transform: `translate(-${expandedLeftSize}, 0)`
            },
            "&.collapsedPanel": {
                "& .left": {
                    transform: `translate(-${collapsedLeftSize}, 0)`

                },
            },
        },
        "&.hidden-exit": {
            "& .left": {
                transform: `translate(-${expandedLeftSize}, 0)`
            },
            "&.collapsedPanel": {
                "& .left": {
                    transform: `translate(-${collapsedLeftSize}, 0)`

                },
            },
            "&.hidden-exit-active": {
                "& .left": {
                    transform: "translate(0, 0)"
                },
                "&.collapsedPanel": {
                    "& .left": {
                        transform: "translate(0, 0)"
                    },
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