import injectSheet from "react-jss";

const darkGrey = "#eeeeee";
const grey = "#fafafa";
const lightGrey = "#ffffff";

const styles = (theme) => ({
    "@global": {
        "body": {
            margin: 0,
            padding: 0,
            height: "100vh",
            width: "100vw",
        },
        "#root": {
            height: "100vh",
            width: "100vw",
        },
    },
    root: {
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "300px auto",
        gridTemplateRows: "60px auto"
    },
    left: {
        padding: `${theme.spacing.unit}px`,
        display: "grid",
        gridTemplateColumns: "30px auto",
        gridTemplateRows: "40px auto",
        placeItems: "center left",
        gridColumnGap: `${theme.spacing.unit}px`,
        gridRowGap: `${theme.spacing.unit}px`
    },
    pageTitle: {
        backgroundColor: grey,
        "& .pageIcon": {
            transform: "scale(1.8)"
        }
    },
    sideMenu: {
        backgroundColor: grey,
        position: "relative",
        ".sectionBody": {
            "& > a": {
                display: "block"
            }
        },
        "& .link": {
            textDecoration: "none",
            color: theme.palette.text.primary,
            "&:hover": {
                cursor: "pointer"
            },
            "& > div:last-child": {
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto 30px",
                gridTemplateRows: "auto",
                placeItems: "left right",
            }
        },
        "& .collapseBtn": {
            position: "absolute",
            top: 10,
            right: -9,
            padding: 0,
            minWidth: "auto",
            transform: "rotate(45deg)",
            "& .icon": {
                transform: "rotate(-45deg)",
                fontSize: 18
            }
        }
    },
    menuBar: {
        backgroundColor: darkGrey
    },
    content: {
        backgroundColor: lightGrey
    }
});

export default ((cls) => injectSheet(styles)(cls));