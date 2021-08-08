import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    minHeight: "200px",
    minWidth: "600px",
    padding: "24px",
    outline: "none",
    borderRadius: "6px",
  },
}));

const CustomModal = (props) => {
  const [quantity, setQuantity] = useState("0");
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Order Form</h2>
            <small>{props.selectedCurrentPrice?.price} </small>
            <p id="transition-modal-description">
              Ticker: {props.selectedTicker?.name}
            </p>
            <p id="transition-modal-description">
              Price: {props.selectedTicker?.price}
            </p>
            <p id="transition-modal-description">
              Quantity:{" "}
              {
                <TextField
                  variant="outlined"
                  size="small"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              }
            </p>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() =>
                props.onBuyClick({
                  ...props.selectedTicker,
                  quantity: quantity,
                })
              }
            >
              Buy
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default CustomModal;
