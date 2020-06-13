import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: "20vh",
    backgroundColor: "#F4A261",
    padding: 0,
  },
  title: {
    fontSize: 68,
  },
  subTitle: {
    fontSize: 22,
  },
});

const Jumbotron = () => {
  const classes = useStyles();
  const title = (
    <Typography className={classes.title}> React Ciphers</Typography>
  );
  const subTitle = (
    <Typography className={classes.subTitle}>
      A collection of dynamic examples
    </Typography>
  );

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
