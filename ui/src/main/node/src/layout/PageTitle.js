import {Route, Switch} from "react-router";
import classNames from "classnames";
import React from "react";
import jss from "./jss/PageTitle.jss";

const PageTitle = ({classes, pages, collapsed, className}) => (
    <div className={classNames(className, classes.root, {
        [classes.panelCollapsed]: collapsed
    })}>
        <Switch>
            {pages.map((page, index) => (
                <Route key={`${index}_route_page_title`} exact={page.target.exact} path={page.target.path}
                       render={() => (
                           <>
                               <div className={classes.icon}>{page.target.icon}</div>
                               <div className={classNames({[classes.detailsCollapsed]: collapsed})}>{page.target.title}</div>
                           </>
                       )}/>
            ))}
        </Switch>
    </div>
);

export default jss(PageTitle);