import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from "../Teacher/Logout";

const useStyles = makeStyles({
    root:{
        padding: '6px',
    }
})

function Header({title}) {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="h6" component= {Link} to={'/'} style={{flexGrow:1, color: '#fff', textDecoration:'none'}}>{title}</Typography>
                {/* <Button variant="outlined" size= 'large' color="inherit">Log out</Button> */}
                {/* <Button variant="outlined" size= 'large' color="inherit" >Profile</Button> */}
                
                < Logout />
            </Toolbar>
        </AppBar>
    )
}

export default Header
