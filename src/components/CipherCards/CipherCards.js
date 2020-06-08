import React from "react";
import CipherCard from "../CipherCard/CipherCard";
import Grid from "@material-ui/core/Grid";

const CipherCards = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard />
      </Grid>
    </Grid>
  );
};

export default CipherCards;
