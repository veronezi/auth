import {Route, Switch} from "react-router";
import React from "react";
import jss from "./jss/Content.jss";
import classNames from "classnames";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {transitionDuration} from "./jss/CommonStyles";

const getContent = (original) => {
    if (typeof original === 'function') {
        return original();
    }
    return original;
};

const Content = ({classes, pages, className}) => (
    <div className={classNames(className, classes.root)}>
        <Route render={({location}) => (
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} timeout={transitionDuration} classNames={"slide"}>
                    <Switch location={location}>
                        {pages.map((page, index) => (
                            <Route key={`${index}_route_content`} exact={page.target.exact} path={page.target.path}
                                   render={() => {
                                       return (
                                           <div className={classes.content}>
                                               {getContent(page.target.content)}
                                           </div>
                                       );
                                   }}/>
                        ))}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>
    </div>
);

export default jss(Content);

/*
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
 */