import injectSheet from "react-jss";
import {collapsedLeftSize, expandedLeftSize, grey, padding, slideStyles} from "./CommonStyles";

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
        ...slideStyles
    },
    linkCollapsed: {
        display: "none"
    }
});

export default ((cls) => injectSheet(styles)(cls));