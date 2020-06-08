import React from "react";
import Container from "@material-ui/core/Container";

const styleObj = {
  height: "100vh",
};

const Page = (props) => {
  return (
    <Container maxWidth={false} style={styleObj}>
      {props.children}
    </Container>
  );
};

export default Page;
