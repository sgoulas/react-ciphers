export const Encrypt = (input) => {
  const plaintext = input.toLowerCase();
  if (plaintext.length < 1) {
    alert("please enter some plaintext");
    return;
  }
  const shift = 13;
  let ciphertext = "";
  const regex = /[a-z]/;
  for (let i = 0; i < plaintext.length; i++) {
    if (regex.test(plaintext.charAt(i)))
      ciphertext += String.fromCharCode(
        ((plaintext.charCodeAt(i) - 97 + shift) % 26) + 97
      );
    else ciphertext += plaintext.charAt(i);
  }
  return ciphertext;
};

export const Decrypt = (encryptedText) => {
  const ciphertext = encryptedText.toLowerCase();
  // do some error checking
  if (ciphertext.length < 1) {
    alert("please enter some ciphertext (letters only)");
    return;
  }
  const shift = 13;
  let plaintext = "";
  var re = /[a-z]/;
  for (let i = 0; i < ciphertext.length; i++) {
    if (re.test(ciphertext.charAt(i)))
      plaintext += String.fromCharCode(
        ((ciphertext.charCodeAt(i) - 97 + 26 - shift) % 26) + 97
      );
    else plaintext += ciphertext.charAt(i);
  }
  return plaintext;
};

// http://practicalcryptography.com/ciphers/classical-era/rot13/
