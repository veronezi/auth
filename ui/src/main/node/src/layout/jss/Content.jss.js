import injectSheet from "react-jss";
import {lightGrey} from "./CommonStyles";

const styles = () => ({
    root: {
        backgroundColor: lightGrey,
        width: "100%",
        height: "100%",
    }
});

export default ((cls) => injectSheet(styles)(cls));