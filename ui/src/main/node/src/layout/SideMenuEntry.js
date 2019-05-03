import classNames from "classnames";
import React from "react";
import jss from "./jss/SideMenuEntry.jss";
import {Link} from "react-router-dom";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Tooltip from "@material-ui/core/Tooltip";

const DEFAULT_RIGHT_ICON = (<ArrowRight/>);

const SideMenuEntryBack = jss(({backTo, collapsed, classes}) => {
    if (!backTo) {
        return null;
    }
    const title = `Back to ${backTo.title}`;
    const result = (
        <Link to={backTo.path} className={classNames(classes.root, {
            [classes.panelCollapsed]: collapsed
        })}>
            <div className={classNames(classes.icon, "arrow")}><ArrowLeft/></div>
            <div className={classNames(classes.details, {[classes.collapsed]: collapsed})}>
                <span className={classes.text}>{title}</span>
            </div>
        </Link>
    );
    if (collapsed) {
        return (
            <Tooltip title={title} placement="right">
                {result}
            </Tooltip>
        );
    }
    return result;
});

const SideMenuEntry = ({classes, sm, index, collapsed}) => {
    const rightIcon = sm.rightIcon ? sm.rightIcon : DEFAULT_RIGHT_ICON;
    let result;
    if (sm.action) {
        result = (
            <div key={index} className={classNames(classes.root, {
                [classes.panelCollapsed]: collapsed
            })} onClick={sm.action}>
                <div className={classes.icon}>{sm.icon}</div>
                <div className={classNames(classes.details, {[classes.detailsCollapsed]: collapsed})}>
                    <div><span className={classes.text}>{sm.title}</span></div>
                    <div className={"arrow"}>{rightIcon}</div>
                </div>
            </div>
        );
    } else {
        result = (
            <Link key={index} to={sm.path} className={classNames(classes.root, {
                [classes.panelCollapsed]: collapsed
            })}>
                <div className={classes.icon}>{sm.icon}</div>
                <div className={classNames(classes.details, {[classes.detailsCollapsed]: collapsed})}>
                    <div><span className={classes.text}>{sm.title}</span></div>
                    <div className={"arrow"}>{rightIcon}</div>
                </div>
            </Link>
        );
    }
    if (collapsed) {
        return (
            <Tooltip title={sm.title} placement="right">
                {result}
            </Tooltip>
        );
    }
    return result;
};

export {
    SideMenuEntryBack
};
export default jss(SideMenuEntry);