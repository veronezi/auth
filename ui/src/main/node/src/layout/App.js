import React from "react";
import jss from "./App.jss";
import Arrow from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

const DEFAULT_RIGHT_ICON = (<ArrowRight/>);

const PageTitle = ({classes, pages}) => (
    <div className={classes.pageTitle}>
        <Switch>
            {pages.map((page, index) => (
                <Route key={`${index}_route_page_title`} exact={page.target.exact} path={page.target.path} render={() => (
                    <div className={classes.left}>
                        <div className={"pageIcon"}>{page.target.icon}</div>
                        <div>{page.target.title}</div>
                    </div>
                )}/>
            ))}
        </Switch>
    </div>
);

const MenuBar = ({classes, pages}) => (
    <div className={classes.menuBar}>
        <Switch>
            {pages.map((page, index) => (
                <Route key={`${index}_route_menu_bar`} exact={page.target.exact} path={page.target.path} render={() => (
                    <div>
                        {page.target.menuBar}
                    </div>
                )}/>
            ))}
        </Switch>
    </div>
);

const Content = ({classes, pages}) => (
    <div className={classes.content}>
        <Switch>
            {pages.map((page, index) => (
                <Route key={`${index}_route_content`} exact={page.target.exact} path={page.target.path} render={() => (
                    <div>
                        {page.target.content}
                    </div>
                )}/>
            ))}
        </Switch>
    </div>
);

const SideMenuEntry = ({classes, sm, index}) => {
    const className = `${classes.left} link`;
    const rightIcon = sm.rightIcon ? sm.rightIcon : DEFAULT_RIGHT_ICON;
    if (sm.action) {
        return (
            <div key={index} className={className}>
                <div>{sm.icon}</div>
                <div>
                    <span>{sm.title}</span>
                    {rightIcon}
                </div>
            </div>
        );
    }
    return (
        <Link key={index} to={sm.path} className={className}>
            <div>{sm.icon}</div>
            <div>
                <span>{sm.title}</span>
                {rightIcon}
            </div>
        </Link>
    );
};

const SideMenu = ({classes, pages}) => {
    return (
        <div className={classes.sideMenu}>
            <Switch>
                {pages.map((page, index) => (
                    <Route key={`${index}_route_side_menu`} exact={page.target.exact} path={page.target.path} render={() => (
                        <div className={"sectionBody"}>
                            <div className={"top"}>
                                {page.sideBar.filter((sm) => !sm.bottom).map((sm, i) => (
                                    <SideMenuEntry classes={classes} sm={sm} key={`${i}_top_side_menu`} index={`${i}_top_side_menu`} />
                                ))}
                            </div>
                            <div className={"bottom"}>
                                {page.sideBar.filter((sm) => sm.bottom).map((sm, i) => (
                                    <SideMenuEntry classes={classes} sm={sm} key={`${i}_bottom_side_menu`} index={`${i}_bottom_side_menu`} />
                                ))}
                            </div>

                        </div>
                    )}/>
                ))}
            </Switch>
            <Button variant="contained" size="small" color="primary" className={"collapseBtn"}>
                <Arrow className={"icon"}/>
            </Button>
        </div>
    );
};

const App = ({classes, pages}) => {
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <PageTitle classes={classes} pages={pages}/>
                <MenuBar classes={classes} pages={pages}/>
                <SideMenu classes={classes} pages={pages}/>
                <Content classes={classes} pages={pages}/>
            </div>
        </BrowserRouter>
    );
};

export default jss(App);
