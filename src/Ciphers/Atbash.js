export const Encrypt = (input) => {
  const plaintext = input.toLowerCase();
  const key = "ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase();
  if (plaintext.length < 1) {
    alert("please enter some plaintext (letters and numbers only)");
    return;
  }
  let ciphertext = "";
  let regex = /[a-z]/;
  for (let i = 0; i < plaintext.length; i++) {
    if (regex.test(plaintext.charAt(i)))
      ciphertext += key.charAt(plaintext.charCodeAt(i) - 97);
    else ciphertext += plaintext.charAt(i);
  }

  return ciphertext;
};

export const Decrypt = (input) => {
  let ciphertext = input.toLowerCase();
  let key = "ZYXWVUTSRQPONMLKJIHGFEDCBA".toLowerCase();
  if (ciphertext.length < 1) {
    alert("please enter some ciphertext (letters only)");
    return;
  }
  let plaintext = "";
  var re = /[a-z]/;
  for (let i = 0; i < ciphertext.length; i++) {
    if (re.test(ciphertext.charAt(i)))
      plaintext += String.fromCharCode(key.indexOf(ciphertext.charAt(i)) + 97);
    else plaintext += ciphertext.charAt(i);
  }
  return plaintext;
};

// http://practicalcryptography.com/ciphers/classical-era/atbash-cipher/
