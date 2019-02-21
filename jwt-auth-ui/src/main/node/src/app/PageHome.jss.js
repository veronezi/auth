import injectSheet from "react-jss";

const styles = () => ({
    root: {}
});

export default ((cls) => injectSheet(styles)(cls));