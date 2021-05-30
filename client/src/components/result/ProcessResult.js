import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

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
     
    },
    root: {
      '&.MuiPaper-root': {
        width:"100%",
       // margin: "10px",
        padding: " 20px 90px"
      }
    }
});


// Retrieving Questions
async function getList(setVal, examId){
  // console.log(examId)
    return await axios.get(
      `../api/studentDash/result/exam?${examId}`
     
      ).then((res) => {
        // console.log(res.data); 
        setVal(res.data)
        
      }).catch(err => console.error(err)); 
      
    };


const ProcessResult = () => {
    const query = window.location.search.substring(0);
    const qid = query.slice(1);

    const classes = useStyles();
    const [val, setVal] = React.useState({});
    console.log(val)

    React.useEffect(() => {
      getList(setVal, qid);
      // console.log(val)
      // return () => {
      //   setVal({})
      // }
    }, [val,qid])
    
    return (
        <div>
          <Paper className={classes.root}>
            <TableContainer component ={ Paper }>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Student Name</StyledTableCell>
                            <StyledTableCell align="center">Marks</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {val.length> 0 ? val.map((row) => (
                        <StyledTableRow key={row._id}>
                          <StyledTableCell align="center">{val.indexOf(row)+1}. {row.username}</StyledTableCell>
                            <StyledTableCell align="center">{row.marks}</StyledTableCell>
                        </StyledTableRow>
                    ))
                    : "No Student attended the exam"
                  }
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
        </div>
    )
}

export default ProcessResult
