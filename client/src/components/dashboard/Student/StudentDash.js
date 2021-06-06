import { CssBaseline, makeStyles } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import React from 'react';
import Header from '../Teacher/Header';
import PageHeader from '../Teacher/PageHeader';
import Examlist from './Examlist';

const useStyles = makeStyles({
    dashMain:{
        // paddingLeft: '200px',
        width: '100%',
    }
})

const StudentDash = (username) => {
    const classes = useStyles();
    // console.log(username)
    return (
        <>
            {/* <SideMenu /> */}
            <div className={classes.dashMain} >
                <Header title= "Student Dashboard" />
                <PageHeader title = "Exam List" icon= { <ListAltIcon fontSize="large" /> } />
                 <Examlist username={username.username} />
            </div>
            <CssBaseline/>
        </>
    )
}

export default StudentDash
