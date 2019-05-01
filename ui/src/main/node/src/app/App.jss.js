import injectSheet from "react-jss";

const styles = () => ({
    "@global": {
        "body": {
            margin: 0,
            padding: 0,
            height: "100vh"
        },
        "#root": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > div": {
                height: "100%",
                width: "100%",
            }
        },
        root: {}
    }
});

export default ((cls) => injectSheet(styles)(cls));