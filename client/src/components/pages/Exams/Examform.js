import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { Form, useForm } from "../../form/useForm";

 
 
const initialValues = {
    department: ' ',
    course: ' ',
    quizNo: ' ',
    // numofQues: '',
    // marks: '',
    err: '',
    date: new Date(),
}
const useStyles = makeStyles((theme) => ({
    root: {
        '&.MuiGrid-container':{
             display: "grid",
             padding: "25px",
             margin: "10px"
    }},
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button:{
        margin: theme.spacing(1),
        width: "80%"
    }
  })); 

function Examform( {onClose,username}) {
    const classes = useStyles();
    const [user, setUser] = React.useState('');
    // if (username.username.length > 0 )setUser(username.username)
    // console.log(user);
    // Form validation
    const validate = () => {
        let temp = {}
        temp.course = values.course.trim().length ? values.course.trim() : window.alert('Course Name is required')
        temp.department = values.department.trim().length ? values.department.trim() : window.alert('Department is required')
        console.log(temp);
        setErrors({
            ...temp
        })
        return Object.values(temp).every( (x) => x === "" )
    }
    
    // For text input values
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
     } = useForm(initialValues);

     // FOR SELECT INPUT VALUES
 /*    const handleChange = (event) => {
        // if(event.target.name === 'marks')
        setValues(event.target.value);
        // else
        // values.numofQues = event.target.value;
        console.log(values);
      };
*/
    // For date & time
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const closeModal = () =>{
        // console.log(onClose)
        onClose()
    }
    // For Submission
   const handleSubmit = async (e) => {
       e.preventDefault()
       if (validate())
       {window.alert('Testing...')}
       //
      setTimeout(()=>closeModal(), 500);
    // axios
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

    try {
        
        let {department, course, quizNo, date} = values;
        console.log(username);
        date = selectedDate;
        
        await axios.post(
            "api/teacherDash/exam", 
            {   username:username.username,
                department, 
                course, 
                quizNo,                               
                date},
           config
        ).then((res) => {
            console.log(res.data);
            // setValues(" ");
        });
    } 
    catch (error) {
        console.log(error)
    }
    
    // closeModal()
 }

    return (
        <Paper>
            <Form onSubmit = {handleSubmit}>
                <Grid container className= {classes.root}>
                    {/* <Grid item > */}

                        <TextField 
                        variant="outlined"
                        label="Department"
                        name = "department"
                        value = {values.department}
                        onChange = {handleInputChange}
                       
                        
                        />

                        <TextField 
                        variant="outlined"
                        label="Course Name"
                        name="course" 
                        value = {values.course}
                        onChange = {handleInputChange}
                       // onChange = { e=> setvalues(e.target.value)}
                        />

                        <TextField 
                        variant="outlined"
                        label="Quiz No."
                        name = "quizNo"
                        value = {values.quizNo}
                        onChange = {handleInputChange}
                        />

                        <Button className={classes.button} variant="contained" size="large" color="primary" type="submit" align="center" >Create</Button>
                    
                    </Grid>
                    {/* <Grid item xs={6}> 


                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container>
                                <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                                <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                         <br></br> 
                        
                    </Grid> */}
                {/* </Grid> */}
            </Form>
            </Paper>
        
    )
}

export default Examform
