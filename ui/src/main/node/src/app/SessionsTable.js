import React from "react";
import {connect} from "react-redux";
import jss from "./SessionsTable.jss";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import moment from "moment";

const TablePaginationActions = jss(({classes, count, page, rowsPerPage, theme, onChangePage}) => (
    <div className={classes.tableNavigation}>
        <IconButton
            onClick={(event) => onChangePage(event, 0)}
            disabled={page === 0}
            aria-label="First Page">
            {theme.direction === "rtl" ? <LastPageIcon/> : <FirstPageIcon/>}
        </IconButton>
        <IconButton
            onClick={(event) => onChangePage(event, page - 1)}
            disabled={page === 0}
            aria-label="Previous Page">
            {theme.direction === "rtl" ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
        </IconButton>
        <IconButton
            onClick={(event) => onChangePage(event, page + 1)}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Next Page">
            {theme.direction === "rtl" ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
        </IconButton>
        <IconButton
            onClick={(event) => onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Last Page">
            {theme.direction === "rtl" ? <FirstPageIcon/> : <LastPageIcon/>}
        </IconButton>
    </div>
));

const SessionsTable = ({classes, events, rowsPerPage, handleChangeRowsPerPage, handleChangePage}) => (
    <div className={classes.root}>
        <div className={classes.table}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.idColumn}>Session ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell className={classes.dateColumn}>Created</TableCell>
                        <TableCell className={classes.dateColumn}>Expires</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell className={classes.idColumn}>{row.id}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell
                                className={classes.dateColumn}>{moment(row.createdOn).format("YYYY-MM-DD HH:mm")}</TableCell>
                            <TableCell
                                className={classes.dateColumn}>{row.expiresOn ? moment(row.expiresOn).format("YYYY-MM-DD HH:mm") : ""}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        <div className={classes.tableFooter}>
            <Table>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            count={events.rows}
                            rowsPerPage={rowsPerPage}
                            page={events.page - 1}
                            onChangePage={(event, page) => handleChangePage(page)}
                            onChangeRowsPerPage={(event) => handleChangeRowsPerPage(Number(event.target.value))}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    events: state.events
});
export default connect(mapStateToProps)(jss(SessionsTable));
