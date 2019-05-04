import {Route, Switch} from "react-router";
import classNames from "classnames";
import React from "react";
import jss from "./jss/SideMenu.jss";
import {transitionDuration} from "./jss/CommonStyles";
import SideMenuEntry, {SideMenuEntryBack} from "./SideMenuEntry";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const SideMenu = ({classes, pages, collapsed, className}) => {
    return (
        <div className={classNames(className, classes.root)}>
            <Route render={({location}) => (
                <TransitionGroup component={null}>
                    <CSSTransition key={location.key} timeout={transitionDuration} classNames={"slide"}>
                        <Switch location={location}>
                            {pages.map((page, index) => (
                                <Route key={`${index}_route_side_menu`} exact={page.target.exact}
                                       path={page.target.path}
                                       render={() => (
                                           <div className={classes.content}>
                                               <div>
                                                   <SideMenuEntryBack backTo={page.backTo} collapsed={collapsed}/>
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
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </div>
    );
};

export default jss(SideMenu);
