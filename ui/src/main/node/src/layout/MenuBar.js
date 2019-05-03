import {Route, Switch} from "react-router";
import HideMenus from "@material-ui/icons/ViewHeadline";
import React from "react";
import jss from "./jss/MenuBar.jss";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";

const MenuBar = ({classes, pages, className, hidden, setHidden}) => (
    <div className={classNames(className, classes.root)}>
        <Switch>
            {pages.map((page, index) => (
                <Route key={`${index}_route_menu_bar`} exact={page.target.exact} path={page.target.path} render={() => (
                    <>
                        <div className={classes.icon}>
                            <IconButton className={classes.button} aria-label="Delete" onClick={() => {
                                setHidden(!hidden);
                            }}>
                                <HideMenus/>
                            </IconButton>
                        </div>
                        <div>{page.target.menuBar}</div>
                    </>
                )}/>
            ))}
        </Switch>
    </div>
);

export default jss(MenuBar);