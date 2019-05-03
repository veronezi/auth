import injectSheet from "react-jss";
import {collapsedLeftSize, expandedLeftSize, grey} from "./CommonStyles";

const styles = (theme) => ({
    root: {
        width: expandedLeftSize,
        transition: `width ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.standard}ms`,
        backgroundColor: grey,
        display: "flex",
        alignItems: "center",
        padding: theme.spacing.unit,
    },
    icon: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: theme.spacing.unit,
    },
    detailsCollapsed: {
        display: "none"
    },
    panelCollapsed: {
        width: collapsedLeftSize
    },
});

export default ((cls) => injectSheet(styles)(cls));