import React, {Component} from "react";
import jss from "./SessionTest.jss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const TITLE = "Test user sessions";

class SessionTest extends Component {
    state = {
        name: "",
        password: "",
    };

    onChangeUserName(name) {
        this.setState({
            ...this.state,
            name
        });
    }

    onChangeUserPassword(password) {
        this.setState({
            ...this.state,
            password
        });
    }

    render() {
        const {classes, open, onClose, onAuthenticate} = this.props;
        const {name, password} = this.state;
        return (
            <Dialog onClose={() => onClose()} open={open}>
                <DialogTitle>{TITLE}</DialogTitle>
                <div className={classes.root}>
                    <TextField
                        className={classes.field}
                        label="Username"
                        margin="normal"
                        variant="filled"
                        value={name}
                        onChange={({target}) => this.onChangeUserName(target.value)}
                    />
                    <TextField
                        className={classes.field}
                        label="Password"
                        margin="normal"
                        variant="filled"
                        value={password}
                        onChange={({target}) => this.onChangeUserPassword(target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={() => onAuthenticate(name, password)}>
                        Authenticate
                        <SendIcon className={classes.sendIcon}/>
                    </Button>
                </div>
            </Dialog>
        )
    }
}

export default jss(SessionTest);
export {
    TITLE
};
