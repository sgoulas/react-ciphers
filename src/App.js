import React from "react";
import Page from "./components/Page/Page";
import CipherCards from "./components/CipherCards/CipherCards";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Page>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="plain text"
              color="primary"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <CipherCards />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default App;
