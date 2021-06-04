import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root:{
        '&.MuiPaper-elevation4':{
            boxShadow: "none"
        },
        padding: "20px",
    }
});

const NavBar = () => {
   const classes= useStyles();

    return (
        
        <AppBar position="static" style={{backgroundColor: 'unset', color: '#e8eaf6'}}  className={classes.root}>
            <Toolbar>
            <Typography variant="h3" style={{flexGrow:1}} > </Typography>
            <Button component={ Link } to="/login" variant="contained" color="primary" size="large" >Sign In</Button>
            <Button component={ Link } to="/register" color="inherit" size="large" >Sign Up</Button>
            </Toolbar>
      </AppBar>
    )
}

export default NavBar;
