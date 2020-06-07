const Encrypt = (input, key) => {
  let ciphertext = "";
  let plaintext = input.toLowerCase().replace(/[^a-z]/g, "");
  let k = key.toLowerCase().replace(/[^0-9 ]/g, "");
  const keys = k.split(" ");
  // do some error checking
  if (plaintext.length < 1) {
    alert("please enter some plaintext (letters and numbers only)");
    return;
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

export default Encrypt;

// http://practicalcryptography.com/ciphers/classical-era/hill/
