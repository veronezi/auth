import React, {Component} from "react";
import {connect} from "react-redux";
import Loading from "./Loading";
import classNames from "classnames";
import jss from "./PageHome.jss";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import rest from "../Rest";

const initPageSize = 10;
const initPage = 0;
rest.loadEvents(initPage + 1, initPageSize);

class PageHome extends Component {
    state = {
        rowsPerPage: initPageSize,
        page: initPage
    };

    handleChangePage = (event, page) => {
        const oldPage = this.state.page;
        if (oldPage !== page) {
            this.setState({
                ...this.state,
                page
            });
            rest.loadEvents(page + 1, this.state.rowsPerPage);
        }
    };

    handleChangeRowsPerPage = event => {
        const oldPagesize = this.state.rowsPerPage;
        const pageSize = Number(event.target.value);
        if (oldPagesize !== pageSize) {
            this.setState({
                ...this.state,
                rowsPerPage: pageSize
            });
            rest.loadEvents(this.state.page + 1, pageSize);
        }
    };

    render() {
        const {events, classes} = this.props;
        const {rowsPerPage} = this.state;
        return (
            <div className={classNames(classes.root)}>
                <Loading/>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>username</TableCell>
                            <TableCell>date</TableCell>
                            <TableCell>success</TableCell>
                            <TableCell>exception</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.data.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.success + ''}</TableCell>
                                <TableCell>{row.exception ? row.exception + '' : ''}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={events.rows}
                                rowsPerPage={rowsPerPage}
                                page={events.page - 1}
                                SelectProps={{
                                    native: true,
                                }}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    events: state.events
});
export default connect(mapStateToProps)(jss(PageHome));
