import injectSheet from "react-jss";

const styles = (theme) => ({
    root: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    table: {
        flexGrow: 1,
        overflow: "auto",
        "& > table": {
            tableLayout: "fixed",
            width: "100%",
            whiteSpace: "nowrap",
            "& td": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }
        }
    },
    tableFooter: {
        backgroundColor: theme.palette.common.white,
        "& tr, & td": {
            display: "block",
            width: "100%"
        }
    },
    dateColumn: {
        width: 190
    },
    idColumn: {
        width: 350
    },
    tableNavigation: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

export default ((cls) => injectSheet(styles)(cls));