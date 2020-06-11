import React from "react";
import CipherCard from "../CipherCard/CipherCard";
import Grid from "@material-ui/core/Grid";
import * as atbash from "../../Ciphers/atbash";
import * as base64 from "../../Ciphers/base64";
import * as caesar from "../../Ciphers/caesar";
import * as fourSquare from "../../Ciphers/fourSquare";
import * as hill from "../../Ciphers/hill";
import * as rot13 from "../../Ciphers/rot13";

const ciphers = [
  {
    name: "Atbash",
    description:
      "A substitution cipher where the letters of the alphabet are reversed based on a key.",
    encrypt: (plainText) => atbash.Encrypt(plainText),
    decrypt: (codedText) => atbash.Decrypt(codedText),
  },
  {
    name: "Base64",
    description:
      "Not technically a cipher but widely used to encode binary information.",
    encrypt: (plainText) => base64.Encrypt(plainText),
    decrypt: (codedText) => base64.Decrypt(codedText),
  },
  {
    name: "Caesar",
    description:
      "A substitution cipher in which each letter is 'shifted' down the alphabet.",
    encrypt: (plainText, shift) => caesar.Encrypt(plainText, shift),
    decrypt: (codedText, shift) => caesar.Decrypt(codedText, shift),
    shift: true,
  },
  {
    name: "Four square",
    description:
      "The four-square cipher uses four 5 by 5 matrices arranged in a square.",
    encrypt: (plainText, key_1, key_2) =>
      fourSquare.Encrypt(plainText, key_1, key_2),
    decrypt: (codedText, key_1, key_2) =>
      fourSquare.Decrypt(codedText, key_1, key_2),
    keyGenerator: () => fourSquare.GenRandKey(),
    numberOfKeys: 2,
  },
  {
    name: "Hill",
    description:
      "A substitution cipher with a specific key where the letters of the alphabet are offset 13 places",
    encrypt: (plainText, key) => hill.Encrypt(plainText, key),
    decrypt: (codedText, key) => hill.Decrypt(codedText, key),
    keyGenerator: () => hill.GenRandKey(),
    numberOfKeys: 1,
  },
  {
    name: "Rot13",
    description:
      "A substitution cipher with a specific key where the letters of the alphabet are offset 13 places",
    encrypt: (plainText) => rot13.Encrypt(plainText),
    decrypt: (codedText) => rot13.Decrypt(codedText),
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
      {ciphers.map((cipher) => {
        return (
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <CipherCard text={text} {...cipher} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CipherCards;
