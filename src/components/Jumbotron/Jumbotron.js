import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    height: "20vh",
    backgroundColor: "#F4A261",
    padding: 0,
  },
});

const Jumbotron = () => {
  const classes = useStyles();
  const title = "React Ciphers";
  const subTitle = "A collection of dynamic examples";

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{title}</Grid>
      <Grid item>{subTitle}</Grid>
    </Grid>
  );
};

export default Jumbotron;
