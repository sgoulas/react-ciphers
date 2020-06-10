export const Encrypt = (input, key) => {
  let ciphertext = "";
  let plaintext = input.toLowerCase().replace(/[^a-z]/g, "");
  let k = key.toLowerCase().replace(/[^0-9 ]/g, "");
  const keys = k.split(" ");
  // do some error checking
  if (plaintext.length < 1) {
    return "please enter some plaintext (letters and numbers only)";
  }
  if (plaintext.length % 2 === 1) {
    plaintext = plaintext + "x";
  }
  if (keys.length !== 4) {
    alert("key should consist of 4 integers");
    return;
  }
  for (let i = 0; i < 4; i++) keys[i] = keys[i] % 26;
  ciphertext = "";
  for (let i = 0; i < plaintext.length; i += 2) {
    ciphertext += String.fromCharCode(
      ((keys[0] * (plaintext.charCodeAt(i) - 97) +
        keys[1] * (plaintext.charCodeAt(i + 1) - 97)) %
        26) +
        97
    );
    ciphertext += String.fromCharCode(
      ((keys[2] * (plaintext.charCodeAt(i) - 97) +
        keys[3] * (plaintext.charCodeAt(i + 1) - 97)) %
        26) +
        97
    );
  }
  return ciphertext;
};

export const Decrypt = (encryptedText, key) => {
  let ciphertext = encryptedText.toLowerCase().replace(/[^a-z]/g, "");
  let k = key.replace(/[^0-9 ]/g, "");
  let keys = k.split(" ");
  // do some error checking
  if (ciphertext.length < 1) {
    alert(
      "please enter some ciphertext (letters only, numbers should be spelled)"
    );
    return;
  }
  if (ciphertext.length % 2 === 1) {
    alert("ciphertext is not divisible by 2 (wrong algorithm?)");
    return;
  }
  if (keys.length !== 4) {
    alert("key should consist of 4 integers");
    return;
  }
  for (let i = 0; i < 4; i++) keys[i] = keys[i] % 26;
  // calc inv matrix
  let det = keys[0] * keys[3] - keys[1] * keys[2];
  det = ((det % 26) + 26) % 26;
  let di = 0;
  for (let i = 0; i < 26; i++) {
    if ((det * i) % 26 === 1) di = i;
  }
  if (di === 0) {
    alert("could not invert, try different key");
    return;
  }
  let ikeys = new Array(4);
  ikeys[0] = (di * keys[3]) % 26;
  ikeys[1] = (-1 * di * keys[1]) % 26;
  ikeys[2] = (-1 * di * keys[2]) % 26;
  ikeys[3] = di * keys[0];
  for (let i = 0; i < 4; i++) {
    if (ikeys[i] < 0) ikeys[i] += 26;
  }
  let plaintext = "";
  for (let i = 0; i < ciphertext.length; i += 2) {
    plaintext += String.fromCharCode(
      ((ikeys[0] * (ciphertext.charCodeAt(i) - 97) +
        ikeys[1] * (ciphertext.charCodeAt(i + 1) - 97)) %
        26) +
        97
    );
    plaintext += String.fromCharCode(
      ((ikeys[2] * (ciphertext.charCodeAt(i) - 97) +
        ikeys[3] * (ciphertext.charCodeAt(i + 1) - 97)) %
        26) +
        97
    );
  }
  return plaintext;
};

// http://practicalcryptography.com/ciphers/classical-era/hill/
// 5 17 4 15 key
