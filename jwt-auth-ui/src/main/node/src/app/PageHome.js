import React, {Component} from "react";
import Loading from "./Loading";
import classNames from "classnames";
import jss from "./PageHome.jss";
import rest from "../Rest";
import SessionsTable from "./SessionsTable";
import SessionTest, {TITLE as testTitle} from "./SessionTest";
import KeyIcon from "@material-ui/icons/VpnKey";
import Fab from "@material-ui/core/Fab";

const initPageSize = 25;
const initPage = 0;
rest.getSessions(initPage + 1, initPageSize);

class PageHome extends Component {
    state = {
        rowsPerPage: initPageSize,
        page: initPage,
        testOpen: false
    };

    handleChangePage = (page) => {
        const oldPage = this.state.page;
        if (oldPage !== page) {
            this.setState({
                ...this.state,
                page
            });
            rest.getSessions(page + 1, this.state.rowsPerPage);
        }
    };

    handleChangeRowsPerPage = (pageSize) => {
        const oldPagesize = this.state.rowsPerPage;
        if (oldPagesize !== pageSize) {
            this.setState({
                ...this.state,
                rowsPerPage: pageSize
            });
            rest.getSessions(this.state.page + 1, pageSize);
        }
    };

    onCloseTest() {
        this.setState({
            ...this.state,
            testOpen: false
        });
    }

    onOpenTest() {
        this.setState({
            ...this.state,
            testOpen: true
        });
    }

    onAuthenticate(name, password) {
        rest.authenticate(name, password).then(() => {
            const {rowsPerPage, page} = this.state;
            rest.getSessions(page + 1, rowsPerPage);
        });
    }

    render() {
        const {classes} = this.props;
        const {rowsPerPage, testOpen} = this.state;
        return (
            <div className={classNames(classes.root)}>
                <Loading/>
                <SessionTest
                    open={testOpen}
                    onClose={() => this.onCloseTest()}
                    onAuthenticate={(name, password) => this.onAuthenticate(name, password)}/>
                <SessionsTable
                    handleChangeRowsPerPage={(pageSize) => this.handleChangeRowsPerPage(pageSize)}
                    handleChangePage={(page) => this.handleChangePage(page)}
                    rowsPerPage={rowsPerPage}
                />
                <Fab color="primary" aria-label={testTitle} className={classes.testIcon}
                     onClick={() => this.onOpenTest()}>
                    <KeyIcon/>
                </Fab>
            </div>
        );
    }
}

export default jss(PageHome);
