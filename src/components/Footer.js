import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default ({ prevView, nextView }) => {
  return (<div>
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button variant="contained" color="primary" onClick={() => prevView()}>
      <ArrowBackIosIcon />
    </Button>
    <Button variant="contained" color="primary" onClick={() => nextView()}>
      <ArrowForwardIosIcon />
    </Button>
    </ButtonGroup>
  </div>);
}
