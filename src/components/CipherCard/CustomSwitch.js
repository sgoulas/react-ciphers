import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    fontSize: 16,
    color: "#264653",
  },
});

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: "#264653",
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#264653",
        borderColor: "#264653",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: "1px solid #2A9D8F",
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const CustomSwitch = ({ isChecked, handleSwitchChange }) => {
  const classes = useStyles();

  const switchText = isChecked ? "Encrypt" : "Decrypt";

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="body1" component="h2" className={classes.text}>
            {switchText}
          </Typography>
        </Grid>
        <Grid item>
          <StyledSwitch
            checked={isChecked}
            onChange={handleSwitchChange}
            name="checked"
          />
        </Grid>
      </Grid>
    </Typography>
  );
};

export default CustomSwitch;
