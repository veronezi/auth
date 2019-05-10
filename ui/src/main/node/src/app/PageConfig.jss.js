import injectSheet from "react-jss";

const styles = () => ({
    root: {
        height: "100%",
    },
});

export default ((cls) => injectSheet(styles)(cls));