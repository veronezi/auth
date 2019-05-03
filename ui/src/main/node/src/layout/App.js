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


const getInitValues = (config) => {
    const key = config.storagePrefix ? config.storagePrefix : "system-values-";
    const storage = window.sessionStorage;
    let saveInit = {
        collapsed: true,
        hidden: false,
    };
    if (storage.getItem(key)) {
        saveInit = JSON.parse(storage.getItem(key))
    }
    return {
        ...config.init,
        ...saveInit
    }
};

const saveInit = (config, init) => {
    const key = config.storagePrefix ? config.storagePrefix : "system-values-";
    const storage = window.sessionStorage;
    storage.setItem(key, JSON.stringify(init));
};

const App = ({classes, config}) => {
    const {pages} = config;
    const init = getInitValues(config);
    const [collapsed, setCollapsed] = useState(init.collapsed);
    const [hidden, setHidden] = useState(init.hidden);
    const setCollapsedIntercept = (value) => {
        init.collapsed = value;
        saveInit(config, init);
        setCollapsed(value);
    };
    const setHiddenIntercept = (value) => {
        init.hidden = value;
        saveInit(config, init);
        setHidden(value);
    };
    return (
        <BrowserRouter>
            <Loading/>
            <div className={classes.root}>
                <div className={classes.left}>
                    <PageTitle className={classes.top} pages={pages} hidden={hidden} collapsed={collapsed}/>
                    <SideMenu pages={pages} hidden={hidden} collapsed={collapsed}/>
                    <Button variant="contained" size="small" color="primary" className={classes.collapseBtn}
                            onClick={() => {
                                setCollapsedIntercept(!collapsed);
                            }}>
                        {collapsed ? <ArrowRight className={classes.collapseIcon}/> : (
                            <ArrowLeft className={classes.collapseIcon}/>)}
                    </Button>
                </div>
                <div className={classes.right}>
                    <MenuBar className={classes.top} pages={pages} hidden={hidden} setHidden={setHiddenIntercept}/>
                    <Content pages={pages}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default jss(App);
