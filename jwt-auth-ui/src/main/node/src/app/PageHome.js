import React from "react";
import {connect} from "react-redux";
import Loading from "./Loading";
import classNames from "classnames";
import jss from "./PageHome.jss";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import rest from "../Rest";
rest.loadEvents();

const PageHome = ({classes, events}) => {
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
                    {events.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.success}</TableCell>
                            <TableCell>{row.exception}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    events: state.events
});
export default connect(mapStateToProps)(jss(PageHome));
