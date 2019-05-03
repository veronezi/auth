import {Route, Switch} from "react-router";
import React from "react";
import jss from "./jss/Content.jss";
import classNames from "classnames";

const Content = ({classes, pages, className}) => (
    <div className={classNames(className, classes.root)}>
        <Switch>
            {pages.map((page, index) => (
                <Route key={`${index}_route_content`} exact={page.target.exact} path={page.target.path} render={() => page.target.content}/>
            ))}
        </Switch>
    </div>
);

export default jss(Content);