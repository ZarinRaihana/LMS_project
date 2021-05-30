import { CssBaseline, makeStyles } from '@material-ui/core';
//import ListAltIcon from '@material-ui/icons/ListAlt';
import React from 'react';
import Exams from '../../pages/Exams/Exams';
import Header from './Header';
//import PageHeader from './PageHeader';
import SideMenu from './SideMenu';

const useStyles = makeStyles({
    dashMain:{
        paddingLeft: '200px',
        width: '100%',
    }
})

function TeacherDash() {
    const classes = useStyles();
    return (
        <>
            <SideMenu />
            <div className={classes.dashMain} >
                <Header title="Teacher" />
                
                <Exams />
                
            </div>
            <CssBaseline/>
        </>
    )
}

export default TeacherDash
