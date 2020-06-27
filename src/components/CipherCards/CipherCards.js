import React from "react";
import CipherCard from "../CipherCard/CipherCard";
import Grid from "@material-ui/core/Grid";
import ciphers from "./dataModel";

const CipherCards = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {ciphers.map((cipher) => {
        return (
          <Grid item key={cipher.name} xl={4} lg={4} md={6} sm={6} xs={12}>
            <CipherCard {...cipher} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CipherCards;
