import injectSheet from "react-jss";
import {darkGrey} from "./CommonStyles";

const styles = (theme) => ({
    root: {
        backgroundColor: darkGrey,
        display: "grid",
        gridTemplateColumns: "60px auto",
        gridTemplateRows: "auto",
        "& > div": {
            height: "100%",
            display: "flex",
            alignItems: "center"
        }

    },
    icon: {
        justifyContent: "center",
        flexDirection: "column",
        color: theme.palette.text.secondary,
    }
});

export default ((cls) => injectSheet(styles)(cls));