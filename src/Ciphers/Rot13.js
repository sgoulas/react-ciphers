const Encrypt = (input) => {
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

// http://practicalcryptography.com/ciphers/classical-era/rot13/
