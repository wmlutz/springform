import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default ({ prevView, nextView }) => {
  return (<footer>
    <Button variant="contained" color="primary" onClick={() => prevView()}>
      <ArrowBackIosIcon />
      Previous
    </Button>
    <Button variant="contained" color="secondary" onClick={() => nextView()}>
      Next
      <ArrowForwardIosIcon />
    </Button>
  </footer>);
}
