import React, { Fragment } from "react";
import {
  Grid,
  Dialog,
  Button,
  FormControl,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core/";

import EditIcon from "@material-ui/icons/Edit";
import ReactSelect from "./reactMaterialSelect";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  paperFullWidth: {
    overflowY: 'visible'
  },
  dialogContentRoot: {
    overflowY: 'visible'
  }
});

export default () => {
  const [open, setOpen] = React.useState(true);
  const [country] = React.useState([
    { value: "1", label: "Afghanistan" },
    { value: "2", label: "Albania" },
    { value: "3", label: "Algeria" },
    { value: "4", label: "American Samoa" },
    { value: "5", label: "Andorra" },
    { value: "6", label: "India" },
    { value: "7", label: "Anguilla" },
    { value: "8", label: "Antarctica" },
    { value: "9", label: "Antigua And Barbuda" }
  ]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <Fragment>
      <EditIcon title="Edit" onClick={handleClickOpen} className="micon" />
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
          paperFullWidth: classes.paperFullWidth
        }}
      >
        <DialogTitle id="alert-dialog-title">Dialog</DialogTitle>
        <DialogContent
        classes={{
          root: classes.dialogContentRoot
        }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
                <ReactSelect isMulti={true} options={country} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
                Other Form field
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
                Other Form field
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
