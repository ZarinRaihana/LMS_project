import { Typography } from '@material-ui/core';
import React from 'react';
import Header from "../../dashboard/Teacher/Header";
import QuesList from "./QuesList";

const AnsQues = () => {
    return (
        <div>
            <Header title="Student" /><br></br>
            <Typography variant="h4" align="center">Question</Typography>
            <QuesList />
        </div>
    )
}

export default AnsQues
