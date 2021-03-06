import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    
    root: {
        backgroundColor: '#fdfdff',
    },
    pageHeader: {
        padding: theme.spacing(3),
        display: 'flex',
       // marginBottom: theme.spacing(2),
    },
    pageIcon: {
        display: 'inline-block',
        padding : theme.spacing(1),
        color: '#3c44b1',
    },
    pageTitle: {
        paddingLeft: theme.spacing(3),
        paddingTop: '15px'

    }
    
}))

function PageHeader(props) {

    const classes = useStyles();
    const {title, icon} = props;
    return (
        <>
            <Paper elevation={0} square className={classes.root}>
                <div className = {classes.pageHeader}>
                    <Card className = {classes.pageIcon}>
                        {icon}
                    </Card>
                    <div className = {classes.pageTitle}>
                        <Typography variant="h6" component = "div" align="left" >{title}</Typography>
                    </div>
                </div>   
            </Paper>
        </> 
    )
}

export default PageHeader
