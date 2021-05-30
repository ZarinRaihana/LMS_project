import { Button, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

// const examId=  new URLSearchParams(this.props.location.search)
// console.log(examId)

// Retrieving Questions
async function getList(setVal, examId){
  // console.log(examId)
    return await axios.get(
      `../api/teacherDash/exam?${examId}`
      
      ).then((res) => {
        // console.log(res.data); 
        setVal(res.data)
        
      }).catch(err => console.error(err)); 
      
    };

// DELETE Question
async function deleteList(quesId){
  return await axios.delete(
    `../api/teacherDash/exam/addQues/quesList/${quesId}`
    ).then((res) => {
      console.log(res.data)
      
    }).catch(err => console.error(err));; 
    
  }
    

const QuesList = () => {
  const query = window.location.search.substring(0);
  const qid = query.slice(1);
  // console.log(qid)
    const classes = useStyles();
    const [val, setVal] = React.useState({});
    
    React.useEffect(() => {
      getList(setVal, qid);
      // console.log(val)
      // return () => {
      //   setVal({})
      // }
    }, [val,qid])


    return (
        <div>
            <TableContainer >
                <Table className={classes.table}>
                    <TableBody>
                        
                            {val.length> 0 ? val.map((row) => (
                              
                            <TableRow key={row._id}>
                              <TableCell align="left"> {val.indexOf(row)+1}. {row.ques}</TableCell>
                              {/* <TableCell align="left"> {row.ques}</TableCell> */}
                              <TableCell align="right">
                            <Button variant="outlined" size="small" color="secondary" onClick={()=>deleteList(row._id)}>Delete</Button>
                          </TableCell>
                            </TableRow>
                        )) : "No Question Found"}
                       
                    </TableBody>
                </Table>
            </TableContainer>


            
        </div>
    )
}

export default QuesList
