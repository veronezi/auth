import injectSheet from "react-jss";

const styles = (theme) => ({
    root: {
        height: "100%",
        position: "relative"
    },
    testIcon: {
        position: "absolute",
        bottom: theme.spacing.unit * 2,
        left: theme.spacing.unit * 2,
    }
});

export default ((cls) => injectSheet(styles)(cls));