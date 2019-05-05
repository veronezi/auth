import React, {Component} from "react";
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
import classNames from "classnames";
import {CSSTransition} from "react-transition-group";
import {transitionDuration, transitionHideDuration} from "./jss/CommonStyles";

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
    if (config.init) {
        return {
            ...config.init,
            ...saveInit
        }
    }
    return saveInit;
};

const saveInit = (config, init) => {
    const key = config.storagePrefix ? config.storagePrefix : "system-values-";
    const storage = window.sessionStorage;
    storage.setItem(key, JSON.stringify(init));
};

// Cannot use useState here because it won work when this becomes an external library.
class App extends Component {
    state = {};

    constructor(props) {
        super(props);
        const {config} = this.props;
        const init = getInitValues(config);
        this.state = {
            collapsed: init.collapsed,
            hidden: init.hidden
        };
    }

    render() {
        const {classes, config} = this.props;
        const init = getInitValues(config);
        const {pages} = config;
        const {hidden, collapsed} = this.state;
        const setCollapsed = (value) => this.setState({
            ...this.state,
            collapsed: value
        });
        const setHidden = (value) => this.setState({
            ...this.state,
            hidden: value
        });
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
                <CSSTransition in={true} appear={true} timeout={transitionDuration} classNames="fade">
                    <CSSTransition in={hidden} appear={hidden} timeout={transitionHideDuration} classNames="hidden">
                        <CSSTransition in={collapsed} appear={collapsed} timeout={transitionHideDuration} classNames="collapsed">
                            <div className={classNames(classes.root, {[classes.hiddenPanel]: hidden, [classes.collapsedPanel]: collapsed})}>
                                <div className={"left"}>
                                    <PageTitle className={classes.top} pages={pages} hidden={hidden}
                                               collapsed={collapsed}/>
                                    <SideMenu pages={pages} hidden={hidden} collapsed={collapsed}/>
                                    <Button variant="contained" size="small" color="primary"
                                            className={classes.collapseBtn}
                                            onClick={() => {
                                                setCollapsedIntercept(!collapsed);
                                            }}>
                                        {collapsed ? <ArrowRight className={classes.collapseIcon}/> : (
                                            <ArrowLeft className={classes.collapseIcon}/>)}
                                    </Button>
                                </div>
                                <div className={"right"}>
                                    <MenuBar className={classes.top} pages={pages} hidden={hidden}
                                             setHidden={setHiddenIntercept}/>
                                    <Content pages={pages}/>
                                </div>
                            </div>
                        </CSSTransition>
                    </CSSTransition>
                </CSSTransition>
            </BrowserRouter>
        );
    }
}

export default jss(App);
