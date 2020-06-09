import React from "react";
import Page from "./components/Page/Page";
import CipherCards from "./components/CipherCards/CipherCards";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextInput from "./components/TextInput/TextInput";

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
            here be stylized jumbotron
          </Grid>
          <Grid item xs={12}>
            <TextInput />
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
