import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '12 !important',
  },
});

export default ({openDialog, handleClose}) => {
  const classes = useStyles();

  return (
    <Dialog aria-labelledby="Submit-Form" open={openDialog} onClose={handleClose}>
      <DialogTitle classes={{ root: classes.root }} id="alert-dialog-title">Submit Response?</DialogTitle>
        
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Yes
          </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
            Go Back
          </Button>
          
        </DialogActions>
    </Dialog>
  );
}
