import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const CustomSnackbar = (props) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.show}
        autoHideDuration={2000}
        onClose={props.onClose}
      >
        <MuiAlert elevation={6} variant="filled" severity={props.type}>
          {props.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
