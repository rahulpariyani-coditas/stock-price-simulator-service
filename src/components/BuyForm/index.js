import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Button, TextField } from "@material-ui/core";
import Label from "../Label";
import CustomSnackbar from "../CustomSnackbar";

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

const BuyForm = (props) => {
  const [quantity, setQuantity] = useState(null);
  const classes = useStyles();
  const [showSnackbar, setShowSnackbar] = useState({
    show: false,
    type: "",
    message: "",
  });

  const snackbarClose = () =>
    setShowSnackbar({
      show: false,
      type: "",
      message: "",
    });

  const buyHandler = () => {
    if (quantity > 0) {
      props.onBuyClick({
        ...props.selectedTicker,
        quantity: quantity,
      });
    } else {
      setShowSnackbar({
        show: true,
        type: "error",
        message: "Please Enter Quantity",
      });
    }
  };
  const quantityChangeHandler = (e) => setQuantity(e.target.value);

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
            <h2 id="transition-modal-title">Order Form: </h2>
            <small>current price: {props.selectedCurrentPrice?.price} </small>
            <Label title="Ticker :"> {props.selectedTicker?.name}</Label>
            <Label title="Price :">
              {`${props.selectedTicker?.price} USD`}
            </Label>
            <Label title="Quantity :">
              {
                <TextField
                  placeholder="Enter Quantity"
                  variant="outlined"
                  size="small"
                  type="number"
                  onChange={quantityChangeHandler}
                />
              }
            </Label>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={buyHandler}
            >
              Buy
            </Button>
          </div>
        </Fade>
      </Modal>

      <CustomSnackbar {...showSnackbar} onClose={snackbarClose} />
    </>
  );
};

export default BuyForm;
