import React from "react";
import CipherCard from "../CipherCard/CipherCard";
import Grid from "@material-ui/core/Grid";
import * as Atbash from "../../Ciphers/Atbash";
import * as Base64 from "../../Ciphers/Base64";

const ciphers = [
  {
    name: "Atbash",
    encrypt: (plainText) => Atbash.Encrypt(plainText),
    decrypt: (codedText) => Atbash.Decrypt(codedText),
  },
  {
    name: "Base64",
    encrypt: (plainText) => Base64.Encrypt(plainText),
    decrypt: (codedText) => Base64.Decrypt(codedText),
  },
];

const CipherCards = ({ text }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard
          cipherName={ciphers[0].name}
          text={text}
          encrypt={ciphers[0].encrypt}
          decrypt={ciphers[0].decrypt}
        />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard
          cipherName={ciphers[1].name}
          text={text}
          encrypt={ciphers[1].encrypt}
          decrypt={ciphers[1].decrypt}
        />
      </Grid>
      {/* <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
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
      </Grid> */}
    </Grid>
  );
};

export default CipherCards;
