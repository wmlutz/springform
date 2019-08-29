import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default ({ setView, viewState }) => {
  return (<div>
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button variant="contained" color="primary" onClick={() => setView(viewState - 1)}>
        <ArrowBackIosIcon />
      </Button>
      <Button variant="contained" color="primary" onClick={() => setView(viewState + 1)}>
        <ArrowForwardIosIcon />
      </Button>
    </ButtonGroup>
  </div>);
}
