import injectSheet from "react-jss";
import {grey, headerSize, padding, slideStyles} from "./CommonStyles";

const styles = () => ({
    root: {
        backgroundColor: grey,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: `calc(100% - ${headerSize})`,
    },
    content: {
        position: "absolute",
        top: "40px",
        bottom: padding,
        left: padding,
        right: padding,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...slideStyles
    }
});

export default ((cls) => injectSheet(styles)(cls));