import React from "react";
import Container from "@material-ui/core/Container";

const styleObj = {
  height: "80vh",
};

const Page = (props) => {
  return (
    <Container maxWidth={false} style={styleObj}>
      {props.children}
    </Container>
  );
};

export default Page;
