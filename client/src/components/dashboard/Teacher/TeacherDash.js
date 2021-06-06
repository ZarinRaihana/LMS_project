import { CssBaseline, makeStyles } from '@material-ui/core';
//import ListAltIcon from '@material-ui/icons/ListAlt';
import React from 'react';
import Exams from '../../pages/Exams/Exams';
import Header from './Header';

const useStyles = makeStyles({
    dashMain:{
        // paddingLeft: '100px',
        width: '100%',
    }
})

function TeacherDash(user) {
    const classes = useStyles();
    // console.log(user)
    return (
        <>
            {/* <SideMenu /> */}
            <div className={classes.dashMain} >
                <Header title="Teacher" />
                
                <Exams username={user.user.username} />
                
            </div>
            <CssBaseline/>
        </>
    )
}

export default TeacherDash
