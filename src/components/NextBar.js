import React from "react";
import Button from "@material-ui/core/Button";

export default ({setView, index}) => {
  return <span style={{ textAlign: "right" }}>
    <Button color="primary" onClick={() => setView(index-1)} size="small">
      Previous
    </Button>
    <Button color="primary" onClick={() => setView(index+1)} size="small">
      Next
    </Button>
  </span>;
}
  