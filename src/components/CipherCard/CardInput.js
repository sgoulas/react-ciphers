import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import KeyboardTabIcon from "@material-ui/icons/KeyboardTab";

const CssTextField = withStyles({
  root: {
    width: 150,
    "& label.Mui-focused": {
      color: "#264653",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#264653",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#264653",
      },
      "&:hover fieldset": {
        borderColor: "#E76F51",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E76F51",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const InputWithIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <KeyboardTabIcon />
        </Grid>
        <Grid item>
          <CssTextField id="input-with-icon-grid" label="Set shift value" />
        </Grid>
      </Grid>
    </div>
  );
};

export default InputWithIcon;
