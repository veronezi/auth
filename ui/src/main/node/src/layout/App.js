import React, {useState} from "react";
import jss from "./jss/App.jss";
import {BrowserRouter} from "react-router-dom";
import Loading from "./Loading";
import PageTitle from "./PageTitle";
import MenuBar from "./MenuBar";
import Content from "./Content";
import SideMenu from "./SideMenu";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";

const App = ({classes, config}) => {
    const {pages, collapsed} = config;
    const [collapsedState, setCollapsed] = useState(collapsed);
    const [hidden, setHidden] = useState(false);
    return (
        <BrowserRouter>
            <Loading/>
            <div className={classes.root}>
                <div className={classes.left}>
                    <PageTitle className={classes.top} pages={pages} hidden={hidden} collapsed={collapsedState} />
                    <SideMenu pages={pages} hidden={hidden} collapsed={collapsedState} />
                    <Button variant="contained" size="small" color="primary" className={classes.collapseBtn} onClick={() => {
                        setCollapsed(!collapsedState);
                    }}>
                        {collapsedState ? <ArrowRight className={classes.collapseIcon}/> : (<ArrowLeft className={classes.collapseIcon}/>)}
                    </Button>
                </div>
                <div className={classes.right}>
                    <MenuBar className={classes.top} pages={pages} hidden={hidden} setHidden={setHidden} />
                    <Content pages={pages}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default jss(App);
