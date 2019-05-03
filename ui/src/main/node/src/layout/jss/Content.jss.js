import injectSheet from "react-jss";
import {lightGrey, fadeStyles} from "./CommonStyles";

const styles = () => ({
    root: {
        backgroundColor: lightGrey,
        width: "100%",
        height: "100%",
        position: "relative"
    },
    content: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        ...fadeStyles
    }
});

export default ((cls) => injectSheet(styles)(cls));