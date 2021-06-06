import { Box, Button, FormControlLabel, makeStyles, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      '& .MuiPaper-root':{
         padding: '50px',
         //margin:'20px'
       //  backgroundColor: '#ebf2fc'
      },
      margin: '200px',
      marginTop: '30px'
      
    },
    radio:{
       
        width: 'auto',
        marginBottom: '40px',
        height: 'auto',
        paddingLeft: '60px',
        
    },
    radioB:{
      marginTop: '8px'
    },
    button:{
      '& .MuiButton-root':{
        justifyContent: 'center',
      }
    },
  });


// Retrieving Questions
async function getList(setVal, examId){
  // console.log(examId)
    return await axios.get(
      `../api/teacherDash/exam?${examId}`
     
      ).then((res) => {
        // console.log(res.data); 
        setVal(res.data)
        
      }).catch(err => console.error(err));; 
      
    };


    const QuesList = () => {
      const query = window.location.search.substring(0).slice(1);
      const qStr = query.split('?user=');
      const examId = qStr[0]//.splice(1);
      const user = qStr[1];
    //  console.log(qStr[0]);
    //  console.log(user);

      const classes = useStyles();
      const [val, setVal] = React.useState({});
      const [values, setValues] = React.useState("")
      const [result, setResult] = React.useState("")
      let [submit, setSubmit] = React.useState(false)

      React.useEffect(() => {
        getList(setVal, examId);
        // console.log(val)
        // return () => {
        //   cleanup
        // }
      }, [val, examId])
      

      const handleInputChange = (e, qid) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [qid] : value,
        });
      //  console.log( qid)
    }

    //const clearFields = () => {}
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      let marks=0;
      console.log(values)
      // console.log(Object.keys(values))
      // console.log(Object.values(values))
      console.log(val)


      Object.entries(values).forEach(([quesId, submittedAns]) =>{
      
        val.map(itm => {
          if(itm._id===quesId && itm.correctAns === submittedAns)
            return marks=marks+1;
          return marks
        })
      }
      )
      // console.log(mark)
     // alert(`${user} have got ${marks}`);

      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      try {
        // console.log( examId);
         await axios.post(
            "../api/teacherDash/result", 
            {   examId,
                username:user,
                marks
            },
            config
         ).then((res) => {console.log(res.data)
          console.log(marks)
        })
       // .finally(clearFields());
        .finally(setSubmit(true));
     } 
     catch (error) {
         console.log(error)
     }
    }

      
      if(submit===false){
      return (
          <div className={classes.root}>
            <Paper >
              <form onSubmit={handleSubmit} > 
                {val.length> 0 ? val.map((row) => 
                  ( <div>
                    <div key={row._id}> 
                      <Typography variant="h6" > {val.indexOf(row)+1}. {row.ques}</Typography>

                      <RadioGroup name="submitAns"  className={classes.radio} 
                      onChange={(e)=>handleInputChange(e, row._id)} >
                        
                            <FormControlLabel value="op1" control={<Radio/> } label={row.option1} className={classes.radioB}></FormControlLabel>
                        
                            <FormControlLabel value="op2" control={<Radio/> } label={row.option2} className={classes.radioB}></FormControlLabel>
                      
                            <FormControlLabel value="op3" control={<Radio/> } label={row.option3} className={classes.radioB}></FormControlLabel>
                        
                            <FormControlLabel value="op4" control={<Radio/> } label={row.option4} className={classes.radioB}></FormControlLabel>
                          
                      </RadioGroup>                  
                    </div>
                  
                  
                  </div>)
                  ): 
                  (<Box textAlign='center'>
                    <div>No Questions Found</div>
                    <br></br> <br></br>
                    <Button variant="contained" size="small" color="primary" style={{justifyContent: 'center'}} component= {Link} to={'/'} >Go to Dashboard</Button>
                  </Box>
                  )} 
                  
                  {val.length> 0 ?<Button className={classes.button} variant="contained" size="medium" color="primary" type="submit" >Submit</Button>
                  :
                  ''}
              </form>
            </Paper>
          </div>
      )}
      else {return (
          <div>
            <br></br>
            <br></br>
            <Typography variant="body1" align="center">Your Answer has been submitted successfully.</Typography>
            <br></br>
            <br></br>
            <Box textAlign='center'>
            <Button variant="contained" size="large" color="primary" style={{justifyContent: 'center'}} component= {Link} to={`/result/exam?${examId}`} >See Results</Button> <br></br> <br></br> 
            <Button variant="contained" size="large" color="primary" style={{justifyContent: 'center'}} component= {Link} to={'/'} >Go to Dashboard</Button>
            </Box>
          </div>
        
      )}
  }
  
  export default QuesList
  