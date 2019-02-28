import injectSheet from "react-jss";

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 170px",
        gridGap: `${theme.spacing.unit}px`,
        backgroundColor: theme.palette.common.white,
    },
    field: {
        margin: 0
    },
    sendIcon: {
        marginLeft: theme.spacing.unit
    }
});

export default ((cls) => injectSheet(styles)(cls));