import {Route, Switch} from "react-router";
import classNames from "classnames";
import React from "react";
import jss from "./jss/PageTitle.jss";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {transitionDuration} from "./jss/CommonStyles";

const PageTitle = ({classes, pages, collapsed, className}) => (
    <div className={classNames(className, classes.root)}>
        <Route render={({location}) => (
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} timeout={transitionDuration} classNames={"slide"}>
                    <Switch location={location}>
                        {pages.map((page, index) => (
                            <Route key={`${index}_route_page_title`} exact={page.target.exact} path={page.target.path}
                                   render={() => (
                                       <div className={classNames(classes.content, {
                                           [classes.panelCollapsed]: collapsed
                                       })}>
                                           <div className={classes.icon}>{page.target.icon}</div>
                                           <div
                                               className={classNames({[classes.detailsCollapsed]: collapsed})}>{page.target.title}</div>
                                       </div>
                                   )}/>
                        ))}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>
    </div>
);

export default jss(PageTitle);