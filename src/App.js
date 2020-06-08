import React from "react";
import Page from "./components/Page/Page";
import CipherCards from "./components/CipherCards/CipherCards";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Page>
        <CipherCards />
      </Page>
    </>
  );
}

export default App;
