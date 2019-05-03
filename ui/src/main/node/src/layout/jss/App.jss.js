import injectSheet from "react-jss";
import {headerSize} from "./CommonStyles";

const global = {
    "body": {
        margin: 0,
        padding: 0,
        height: "100vh",
    },
    "#root": {
        height: "100vh",
    },
};

const styles = () => ({
    "@global": global,
    root: {
        height: `calc(100vh - ${headerSize})`,
        display: "flex",
    },
    top: {
        height: headerSize,
    },
    right: {
        flexGrow: 1
    }
});

export default ((cls) => injectSheet(styles)(cls));