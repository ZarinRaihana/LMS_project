import { Typography } from '@material-ui/core';
import React from 'react';
import Header from '../dashboard/Teacher/Header';
import ProcessResult from './ProcessResult';

const Result = () => {
  return (
    <div>
      <Header /> <br/>
      <Typography variant="h4" align="center">Result</Typography> <br/> 
      <ProcessResult />
    </div>
  )
}

export default Result
