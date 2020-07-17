import React, { useState, useCallback } from "react";
import Page from "./components/Page/Page";
import CipherCards from "./components/CipherCards/CipherCards";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextInput from "./components/TextInput/TextInput";
import { ToastContainer, Slide } from "react-toastify";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import { TextProvider } from "./Context/TextContext";

const App = () => {
  const [userInput, setUserInput] = useState("");

  const updateUserInputCallback = useCallback(
    (newInput) => setUserInput(newInput),
    [setUserInput]
  );

  const toastContainer = (
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
  );

  return (
    <>
      <CssBaseline />
      {toastContainer}
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
            <TextInput updateUserInputCallback={updateUserInputCallback} />
          </Grid>
          <Grid item xs={12}>
            <TextProvider value={userInput}>
              <CipherCards />
            </TextProvider>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default App;
