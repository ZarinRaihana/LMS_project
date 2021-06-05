import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Logout from "../Teacher/Logout";

const useStyles = makeStyles({
    root:{
        padding: '10px',
    }
})

function Header({title}) {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>{title} Dashboard</Typography>
                {/* <Button variant="outlined" size= 'large' color="inherit">Log out</Button> */}
                < Logout />
            </Toolbar>
        </AppBar>
    )
}

export default Header
