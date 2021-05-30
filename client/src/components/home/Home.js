import { makeStyles } from '@material-ui/core';
import React from 'react';
import About from './About';
import NavBar from './NavBar';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url( "https://images.unsplash.com/photo-1544418030-87bf3fa62883?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //color: '#fb8c00',
    color: '#fff',
    fontSize: '1rem',
  },

});

export default function Hook() {
  const classes = useStyles();
  return (
      <div className= {classes.root}>
        <NavBar/>
        <About/>
      </div>
  )
}