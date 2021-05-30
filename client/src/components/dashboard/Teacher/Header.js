import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Logout from "../Teacher/Logout";

function Header({title}) {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>{title} Dashboard</Typography>
                {/* <Button variant="outlined" size= 'large' color="inherit">Log out</Button> */}
                < Logout />
            </Toolbar>
        </AppBar>
    )
}

export default Header
