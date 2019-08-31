import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

export default ({openDialog, handleClose, handleSubmit}) => (
    <Dialog aria-labelledby="Submit-Form" open={openDialog} onClose={handleClose} maxWidth='sm' fullWidth>
      <DialogTitle id="alert-dialog-title">Submit Response?</DialogTitle>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Go Back
          </Button>
        </DialogActions>
    </Dialog>
  );
