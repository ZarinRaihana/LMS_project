import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    }
});


// Retrieving Data
async function getList(setVal){
  return await axios.get(
    "api/teacherDash/exams"
    
    ).then((res) => {
      // console.log(res.data); 
      setVal(res.data)
      
    }).catch(err => console.error(err));; 
    
  }

  // DELETE DATA
  async function deleteList(examId){
    return await axios.delete(
      `api/teacherDash/exams/${examId}`
      ).then((res) => {
        console.log(res.data)
        
      }).catch(err => console.error(err));; 
      
    }

  
  const Examlist = (username, department, course, quizNo, date ) => {
    const user = username.username.username;
    // console.log(user)
    const classes = useStyles();
    const [val, setVal] = React.useState({});
    
    React.useEffect(() => {
      getList(setVal);
      // return () => {
      //   cleanup
      // }
    }, [val])

    // console.log(val) ;

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell align="center">Department</StyledTableCell>
                        <StyledTableCell align="center">Course Name</StyledTableCell>
                        <StyledTableCell align="center" >Quiz No.</StyledTableCell>
                        {/* <StyledTableCell align="center">Date</StyledTableCell> */}
                        {/* <StyledTableCell align="center">Time</StyledTableCell> */}
                        <StyledTableCell align="center"></StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                   {val.length> 0  ? val.map((row) => (
                       Object.values(row).filter((username) =>  {
                        
                          return(username === user)})
                          .map((obj) => {
                           if( obj.length> 0 ) return (
                            <StyledTableRow key={row._id}>
                              {console.log(obj)}
                        {/* <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell> */} 
                        
                          <StyledTableCell align="center">{row.department}</StyledTableCell>
                          <StyledTableCell align="center">{row.course}</StyledTableCell>
                          <StyledTableCell align="center">{row.quizNo}</StyledTableCell>
                          {/* <StyledTableCell align="center">{new Date(row.date).toDateString()}</StyledTableCell> */}
                          {/* <StyledTableCell align="center">{new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone:'Asia/Dhaka'}).format(new Date(row.date))}</StyledTableCell> */}
                          <StyledTableCell align="center"> 
                            <Button variant="outlined" size="small" color="primary" component= {Link}
                            to={`/teacherDash/exam?${row._id}`} > Set Questions</Button>
                          </StyledTableCell>
                          <StyledTableCell align="center"> 
                            <Button variant="outlined" size="small" color="primary" component= {Link}
                            to={`/result/exam?${row._id}`} >Results</Button>
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Button variant="contained" size="small" color="secondary" onClick={()=>deleteList(row._id)} >Delete</Button>
                          </StyledTableCell>
                        </StyledTableRow> 
                           ) 
                        else return "no exam" }
                        )
                     
                    )) : "No Exam found"} 
                     
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Examlist
