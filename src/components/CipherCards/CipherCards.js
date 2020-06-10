import React from "react";
import CipherCard from "../CipherCard/CipherCard";
import Grid from "@material-ui/core/Grid";
import * as atbash from "../../Ciphers/atbash";
import * as base64 from "../../Ciphers/base64";
import * as caesar from "../../Ciphers/caesar";
import * as fourSquare from "../../Ciphers/fourSquare";
import * as rot13 from "../../Ciphers/rot13";

const ciphers = [
  {
    name: "Atbash",
    descriptionShort:
      "A substitution cipher where the letters of the alphabet are reversed based on a key.",
    encrypt: (plainText) => atbash.Encrypt(plainText),
    decrypt: (codedText) => atbash.Decrypt(codedText),
  },
  {
    name: "Base64",
    descriptionShort:
      "Not technically a cipher but widely used to encode binary information.",
    encrypt: (plainText) => base64.Encrypt(plainText),
    decrypt: (codedText) => base64.Decrypt(codedText),
  },
  {
    name: "Caesar",
    descriptionShort:
      "A substitution cipher in which each letter is 'shifted' down the alphabet.",
    encrypt: (plainText, shift) => caesar.Encrypt(plainText, shift),
    decrypt: (codedText, shift) => caesar.Decrypt(codedText, shift),
    shift: true,
  },
  {
    name: "Four square",
    descriptionShort:
      "The four-square cipher uses four 5 by 5 matrices arranged in a square.",
    encrypt: (plainText, key_1, key_2) =>
      fourSquare.Encrypt(plainText, key_1, key_2),
    decrypt: (codedText, key_1, key_2) =>
      fourSquare.Decrypt(codedText, key_1, key_2),
    keyGenerator: () => fourSquare.GenRandKey(),
  },
  {
    name: "Rot13",
    descriptionShort:
      "A substitution cipher with a specific key where the letters of the alphabet are offset 13 places",
    encrypt: (plainText) => rot13.Encrypt(plainText),
    decrypt: (codedText) => rot13.Decrypt(codedText),
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
          descriptionShort={ciphers[4].descriptionShort}
          text={text}
          encrypt={ciphers[3].encrypt}
          decrypt={ciphers[3].decrypt}
          keyGenerator={ciphers[3].keyGenerator}
        />
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <CipherCard
          cipherName={ciphers[4].name}
          descriptionShort={ciphers[4].descriptionShort}
          text={text}
          encrypt={ciphers[4].encrypt}
          decrypt={ciphers[4].decrypt}
        />
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
