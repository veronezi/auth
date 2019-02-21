import injectSheet from "react-jss";

const styles = () => ({
    root: {
        position: "fixed",
        top: 0,
        width: "100%",
        height: 2,
    },
});

export default ((cls) => injectSheet(styles)(cls));