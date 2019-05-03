import {Route, Switch} from "react-router";
import classNames from "classnames";
import React from "react";
import jss from "./jss/SideMenu.jss";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import SideMenuEntry, {SideMenuEntryBack} from "./SideMenuEntry";

const SideMenu = ({classes, pages, collapsed, setCollapsed, className}) => {
    return (
        <div className={classNames(className, classes.root, {
            [classes.panelCollapsed]: collapsed
        })}>
            <Switch>
                {pages.map((page, index) => (
                    <Route key={`${index}_route_side_menu`} exact={page.target.exact} path={page.target.path}
                           render={() => (
                               <div className={classes.content}>
                                   <div>
                                       <SideMenuEntryBack backTo={page.backTo} collapsed={collapsed} />
                                       {page.sideBar.filter((sm) => !sm.bottom).map((sm, i) => (
                                           <SideMenuEntry sm={sm} key={`${i}_top_side_menu`}
                                                          index={`${i}_top_side_menu`}
                                                          collapsed={collapsed}
                                           />
                                       ))}
                                   </div>
                                   <div>
                                       {page.sideBar.filter((sm) => sm.bottom).map((sm, i) => (
                                           <SideMenuEntry sm={sm} key={`${i}_bottom_side_menu`}
                                                          index={`${i}_bottom_side_menu`}
                                                          collapsed={collapsed}
                                           />
                                       ))}
                                   </div>
                               </div>
                           )}
                    />
                ))}
            </Switch>
            <Button variant="contained" size="small" color="primary" className={classes.collapseBtn} onClick={() => {
                setCollapsed(!collapsed);
            }}>
                {collapsed ? <ArrowRight className={classes.collapseIcon}/> : (<ArrowLeft className={classes.collapseIcon}/>)}
            </Button>
        </div>
    );
};

export default jss(SideMenu);