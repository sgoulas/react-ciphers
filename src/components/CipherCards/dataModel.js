import * as atbash from "../../Ciphers/atbash";
import * as base64 from "../../Ciphers/base64";
import * as caesar from "../../Ciphers/caesar";
import * as fourSquare from "../../Ciphers/fourSquare";
import * as hill from "../../Ciphers/hill";
import * as railFence from "../../Ciphers/railFence";
import * as rot13 from "../../Ciphers/rot13";

const ciphers = [
  {
    name: "Atbash",
    description:
      'A substitution cipher where the letters of the alphabet are reversed based on a predefined key. In this case it is "ZYXWVUTSRQPONMLKJIHGFEDCBA"',
    encrypt: (plainText) => atbash.Encrypt(plainText),
    decrypt: (codedText) => atbash.Decrypt(codedText),
  },
  {
    name: "Base64",
    description:
      'Not technically a cipher but widely used to encode binary information.\n It uses the built in functions "btoa" and "atob" to encrypt / decrypt the input.',
    encrypt: (plainText) => base64.Encrypt(plainText),
    decrypt: (codedText) => base64.Decrypt(codedText),
  },
  {
    name: "Caesar",
    description:
      "A substitution cipher in which each letter is 'shifted' down the alphabet based on a shift value.",
    encrypt: (plainText, shift) => caesar.Encrypt(plainText, shift),
    decrypt: (codedText, shift) => caesar.Decrypt(codedText, shift),
    shift: true,
  },
  {
    name: "Four square",
    description:
      "The four-square cipher uses four 5 by 5 matrices of random letters arranged in a square to encrypt pairs of letters, which makes it significantly stronger than substitution ciphers.",
    encrypt: (plainText, key_1, key_2) =>
      fourSquare.Encrypt(plainText, key_1, key_2),
    decrypt: (codedText, key_1, key_2) =>
      fourSquare.Decrypt(codedText, key_1, key_2),
    keyGenerator: fourSquare.GenRandKey,
    numberOfKeys: 2,
  },
  {
    name: "Hill",
    description:
      "Invented by Lester S. Hill in 1929, the Hill cipher is a polygraphic substitution cipher based on linear algebra. Hill used matrices and matrix multiplication to mix up the plaintext. The cipher key is an inversible matrix (in this case a 2 by 2 one).",
    encrypt: (plainText, key) => hill.Encrypt(plainText, key),
    decrypt: (codedText, key) => hill.Decrypt(codedText, key),
    keyGenerator: hill.GenRandKey,
    numberOfKeys: 1,
  },
  {
    name: "Rail Fence",
    description:
      "A transposition cipher that follows a simple rule for mixing up the characters. Although weak on its own, it can be combined with other ciphers, the combination of which is harder to break than either on it's own.",
    encrypt: (plainText, key) => railFence.Encrypt(plainText, key),
    decrypt: (codedText, key) => railFence.Decrypt(codedText, key),
    keyGenerator: railFence.GenRandKey,
    numberOfKeys: 1,
  },
  {
    name: "Rot13",
    description:
      "A substitution cipher with a specific key where the letters of the alphabet are offset 13 places. A more limited version of Caesar's cipher.",
    encrypt: (plainText) => rot13.Encrypt(plainText),
    decrypt: (codedText) => rot13.Decrypt(codedText),
  },
];

export default ciphers;
