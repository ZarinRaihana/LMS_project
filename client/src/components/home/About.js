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
              <Typography className={classes.paragraph} variant = "h6" color = '#fff' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
          </Box>
          </React.Fragment>
  )
  }
  export default About;