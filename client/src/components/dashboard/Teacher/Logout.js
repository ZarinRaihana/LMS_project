import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history =useHistory();

    const logoutHandler = () => {
        localStorage.clear();
        history.push("./../home");
    }

    return (
        <div>
            <Button onClick = {logoutHandler} variant="outlined" size= 'large' color="inherit">Log out</Button>
        </div>
    )
}

export default Logout
