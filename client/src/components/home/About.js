import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  typography: {
    fontFamily: "Segoe UI",
    color: "#bbdffa",
   },
   paragraph:{
    fontFamily: "BlinkMacSystemFont",
   }
});

const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Box align = 'left' mx={20} textAlign="center" display="flex" flexDirection="column" justifyContent="center" height="500px" alignItems="center">
              <Typography className={classes.typography} variant="h1" >QuizHut</Typography>
              <br/>
              <Typography className={classes.paragraph} variant = "h6" color = '#fff' >QuizHut is an online examination system which helps teachers to create, conduct and evaluate assessments and quizzes online. 
              </Typography>
          </Box>
          </React.Fragment>
  )
  }
  export default About;