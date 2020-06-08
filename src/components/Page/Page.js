import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const styleObj = {
  height: "100vh",
  backgroundColor: "#E9C46A",
};

const Page = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} style={styleObj}>
        {props.children}
      </Container>
    </>
  );
};

export default Page;
