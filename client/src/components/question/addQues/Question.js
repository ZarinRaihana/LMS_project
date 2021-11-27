import { Button, FormControlLabel, makeStyles, Paper, Radio, RadioGroup, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root' : {
           width: '80%',
           height:'auto',
           margin : theme.spacing(2),
           
        },
        marginLeft: theme.spacing(15),
   },
   options:{
       '& .MuiInputBase-root' :{
            width: "40%",
            
        },
        
   },
   div1:{
        display: "inline-block",
        margin: "5px",
        justifyContent: "center",
        alignContent: "center",
        height: '70px',
        width: "auto",
        //marginBottom: '20px'
   },
    button:{
        alignContent: "center",
        //margin :theme.spacing(1),
        marginBottom: '20px'
   },
   radioB:{
        marginTop: '20px'
   }
}));

const Question = () => {
    const [ques, setQues] = React.useState("")
    const [option1, setOption1] = React.useState("")
    const [option2, setOption2] = React.useState("")
    const [option3, setOption3] = React.useState("")
    const [option4, setOption4] = React.useState("")
    const [correctAns, setCorrectAns] = React.useState("")
    


   // const [values, setValues] = React.useState("")
   // let textInput = React.useRef(null);
    React.useEffect(() => {
        // console.log(ques)
        // return () => {
        //     cleanup
        // }
    }, [ques])

    // // const handleInputChange = e => {
    // //     const { name, value } = e.target
    // //     setValues({
    // //         ...values,
    // //         [name] : value,
    // //     });
    // // }

    const clearFields = () => {
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setCorrectAns('');
        setQues('');
        // window.location.reload()
    }

    // For Submission
   const handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(e.target)
    // e.target.reset();

    
    const query = window.location.search.substring(0);
    const examId = query.slice(1);
  //  console.log(examId)

  
   const config = {
     header: {
       "Content-Type": "application/json",
     },
   };

 try {
    //  let {ques, 
    //     option1, 
    //     option2, 
    //     option3, 
    //     option4, 
    //     correctAns} = values;
    
     //console.log(values);
     await axios.post(
         "../api/teacherDash/exam/addQues", 
        {   ques, 
            option1, 
            option2, 
            option3, 
            option4, 
            correctAns,
            examId},
        config
     ).then((res) => {console.log(res.data)
    }).finally(clearFields());
 } 
 catch (error) {
     console.log(error)
 }

}

    const classes = useStyles();
    return (
        <Paper>
        <form onSubmit={handleSubmit} className={classes.root}>
            
            <TextField 
            label="Question" 
            variant="outlined"
            name="ques"
            value={ques}
            onChange= {(e) => setQues(e.target.value)}
            multiline
            rowsMax={2}
            />

            <RadioGroup name="correctAns" value={correctAns} onChange= {(e) => setCorrectAns(e.target.value)} >
                <div className={classes.div1}>
                    <FormControlLabel value="op1" control={<Radio/> } className={classes.radioB}></FormControlLabel>
                    <TextField label="Option 1" 
                    variant="outlined" 
                    className={classes.options}
                    name="option1"
                    value={option1}
                    onChange= {(e) => setOption1(e.target.value)}
                    />
                </div>
                <div className={classes.div1}>
                    <FormControlLabel value="op2" control={<Radio/>} className={classes.radioB} ></FormControlLabel>
                    <TextField 
                    label="Option 2" 
                    variant="outlined" 
                    className={classes.options}
                    name="option2"
                    value={option2}
                    onChange= {(e) => setOption2(e.target.value)}
                    />
                </div>
                <div className={classes.div1}>
                    <FormControlLabel value="op3" control={<Radio/>} className={classes.radioB} ></FormControlLabel>    
                    <TextField 
                    label="Option 3" 
                    variant="outlined" 
                    className={classes.options}
                    name="option3"
                    value={option3}
                    onChange= {(e) => setOption3(e.target.value)}
                    />
                </div>
                <div className={classes.div1}>
                    <FormControlLabel value="op4" control={<Radio/>} className={classes.radioB} ></FormControlLabel>
                    <TextField 
                    label="Option 4" 
                    variant="outlined" 
                    className={classes.options}
                    name="option4" 
                    value={option4}
                    onChange= {(e) => setOption4(e.target.value)}
                    />
                </div>
            </RadioGroup> <br></br>
            <Button className={classes.button} variant="contained" size="medium" color="primary" type="submit" align="right"  >Add</Button>
            
        </form>
        </Paper>
    )
}

export default Question
