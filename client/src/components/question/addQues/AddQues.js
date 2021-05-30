import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../dashboard/Teacher/Header';
import QuesList from './QuesList';
import Question from './Question';

const useStyles= makeStyles(theme => ({
    item:{
        '& .MuiGrid-item':{
            margin: 'auto',
        },
       
    }
}));

const AddQues = () => {
    const classes= useStyles();
    return (
        <div>
            <Header title="Teacher"/>
            <br></br>
            <h3 align="center">Questions</h3><br></br>
            <Grid container className={classes.item} >
                <Grid item xs={6} >
                    
                        <QuesList />
                    
                </Grid>
                <Grid item xs={5} >
                    <Question />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default AddQues
