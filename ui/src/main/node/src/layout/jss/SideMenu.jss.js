import injectSheet from "react-jss";
import {collapsedLeftSize, expandedLeftSize, padding, grey} from "./CommonStyles";

const styles = (theme) => ({
    root: {
        backgroundColor: grey,
        position: "relative",
        width: expandedLeftSize,
        height: "100%",
        transition: `width ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.standard}ms`,
    },
    content: {
        height: "100%",
        padding: `40px ${padding} ${padding} ${padding}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    panelCollapsed: {
        width: collapsedLeftSize
    },
    linkCollapsed: {
        display: "none"
    },
    collapseBtn: {
        position: "absolute",
        top: 10,
        right: -9,
        padding: 0,
        minWidth: "auto",
        transform: "rotate(45deg)",
    },
    collapseIcon: {
        transform: "rotate(-45deg)",
        fontSize: 18
    }
});

export default ((cls) => injectSheet(styles)(cls));