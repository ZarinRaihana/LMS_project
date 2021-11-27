import { Backdrop, Button, Fade, makeStyles, Modal, Paper } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import React from 'react';
import PageHeader from '../../dashboard/Teacher/PageHeader';
import Examlist from '../Exams/Examlist';
import Examform from './Examform';


const useStyles= makeStyles(theme => ({
    pageContent:{
         margin: theme.spacing(5),
         padding: theme.spacing(3),
    },
    button:{
        margin: theme.spacing(5),
        float: 'right',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        margin: theme.spacing(5)
      },
    
}));


function Exams(username) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  // console.log(username)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
            <PageHeader title = "Exam List" icon= { <ListAltIcon fontSize="large" /> } />
            <Button variant="contained" className={classes.button} size="large" color="primary" onClick={handleOpen}>Add Exam</Button>
            <Modal
            aria-labelledby="transition-modal-form"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
            >
                <Fade in={open}>
                    <Paper  className={classes.paper} >
                    <Examform onClose={handleClose} username={username}  />
                    </Paper>  
                </Fade>
            </Modal>
            <Examlist username={username}/>
            {/* <Paper className = {classes.pageContent}>
                <Examform />
            </Paper> */}
        </div>
    )
}

export default Exams
