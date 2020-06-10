import React from "react";
import CipherCard from "../CipherCard/CipherCard";
import Grid from "@material-ui/core/Grid";
import * as Atbash from "../../Ciphers/Atbash";
import * as Base64 from "../../Ciphers/Base64";
import * as Caesar from "../../Ciphers/Caesar";
import * as Rot13 from "../../Ciphers/Rot13";

const ciphers = [
  {
    name: "Atbash",
    descriptionShort:
      "A substitution cipher where the letters of the alphabet are reversed based on a key.",
    encrypt: (plainText) => Atbash.Encrypt(plainText),
    decrypt: (codedText) => Atbash.Decrypt(codedText),
  },
  {
    name: "Base64",
    descriptionShort:
      "Not technically a cipher but widely used to encode binary information.",
    encrypt: (plainText) => Base64.Encrypt(plainText),
    decrypt: (codedText) => Base64.Decrypt(codedText),
  },
  {
    name: "Caesar",
    descriptionShort:
      "A substitution cipher in which each letter is 'shifted' down the alphabet.",
    encrypt: (plainText) => Caesar.Encrypt(plainText),
    decrypt: (codedText) => Caesar.Decrypt(codedText),
    shift: true,
  },
  {
    name: "Rot13",
    descriptionShort:
      "A substitution cipher with a specific key where the letters of the alphabet are offset 13 places",
    encrypt: (plainText) => Rot13.Encrypt(plainText),
    decrypt: (codedText) => Rot13.Decrypt(codedText),
    shift: true,
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
          descriptionShort={ciphers[0].descriptionShort}
          text={text}
          encrypt={ciphers[0].encrypt}
          decrypt={ciphers[0].decrypt}
        />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard
          cipherName={ciphers[1].name}
          descriptionShort={ciphers[1].descriptionShort}
          text={text}
          encrypt={ciphers[1].encrypt}
          decrypt={ciphers[1].decrypt}
        />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard
          cipherName={ciphers[2].name}
          descriptionShort={ciphers[2].descriptionShort}
          text={text}
          encrypt={ciphers[2].encrypt}
          decrypt={ciphers[2].decrypt}
          shift={ciphers[2].shift}
        />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard
          cipherName={ciphers[3].name}
          descriptionShort={ciphers[3].descriptionShort}
          text={text}
          encrypt={ciphers[3].encrypt}
          decrypt={ciphers[3].decrypt}
        />
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
    </Grid>
  );
};

export default CipherCards;
