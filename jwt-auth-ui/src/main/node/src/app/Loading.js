import React from "react";
import {connect} from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import jss from "./Loading.jss";

const Loading = ({loading, classes}) => (
    <LinearProgress className={classes.root} value={100} variant={loading ? "indeterminate" : "determinate"}/>
);

const mapStateToProps = state => {
    return {
        loading: state.loadingMarkers.length > 0
    };
};
export default connect(mapStateToProps)(jss(Loading));
