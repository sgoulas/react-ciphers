import React, { useState } from "react";
import Page from "./components/Page/Page";
import CipherCards from "./components/CipherCards/CipherCards";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextInput from "./components/TextInput/TextInput";
import { ToastContainer, Slide } from "react-toastify";
import Jumbotron from "./components/Jumbotron/Jumbotron";

const App = () => {
  const [text, setText] = useState("");

  return (
    <>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Jumbotron />
      <Page>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <TextInput text={text} setText={setText} />
          </Grid>
          <Grid item xs={12}>
            <CipherCards text={text} />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default App;
