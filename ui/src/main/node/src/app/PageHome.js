import React, {useEffect, useState} from "react";
import classNames from "classnames";
import jss from "./PageHome.jss";
import {getSessions, authenticate} from "../services";
import SessionsTable from "./SessionsTable";
import SessionTest, {TITLE as testTitle} from "./SessionTest";
import KeyIcon from "@material-ui/icons/VpnKey";
import Fab from "@material-ui/core/Fab";

const initPageSize = 25;
const initPage = 0;
let loaded = false;

const PageHome = ({classes}) => {
    const [pageSize, setPageSize] = useState(initPageSize);
    const [page, setPage] = useState(initPage);
    const [testOpen, setTestOpen] = useState(false);
    const handleChangePage = (newPage) => {
        if (newPage !== page) {
            setPage(newPage);
            getSessions(newPage + 1, pageSize);
        }
    };
    const handleChangeRowsPerPage = (newPageSize) => {
        if (newPageSize !== pageSize) {
            setPageSize(newPageSize);
            getSessions(page + 1, newPageSize);
        }
    };
    const onAuthenticate = (name, password) => {
        authenticate(name, password).then(() => {
            getSessions(page + 1, pageSize);
        });
    };
    useEffect(() => {
        if(!loaded) {
            loaded = true;
            getSessions(initPage + 1, initPageSize);
        }
    });
    return (
        <div className={classNames(classes.root)}>
            <SessionTest
                open={testOpen}
                onClose={() => setTestOpen(false)}
                onAuthenticate={(name, password) => onAuthenticate(name, password)}/>
            <SessionsTable
                handleChangeRowsPerPage={(newPageSize) => handleChangeRowsPerPage(newPageSize)}
                handleChangePage={(newPage) => handleChangePage(newPage)}
                rowsPerPage={pageSize}
            />
            <Fab color="primary" aria-label={testTitle} className={classes.testIcon}
                 onClick={() => setTestOpen(true)}>
                <KeyIcon/>
            </Fab>
        </div>
    );

};

export default jss(PageHome);
