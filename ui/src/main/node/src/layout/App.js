import React, {useState} from "react";
import jss from "./jss/App.jss";
import {BrowserRouter} from "react-router-dom";
import Loading from "./Loading";
import PageTitle from "./PageTitle";
import MenuBar from "./MenuBar";
import Content from "./Content";
import SideMenu from "./SideMenu";


const App = ({classes, pages}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [hidden, setHidden] = useState(false);
    return (
        <BrowserRouter>
            <Loading/>
            <div className={classes.root}>
                <div>
                    <PageTitle className={classes.top} pages={pages} hidden={hidden} collapsed={collapsed} setCollapsed={setCollapsed}/>
                    <SideMenu pages={pages} hidden={hidden} collapsed={collapsed} setCollapsed={setCollapsed}/>
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
