export const GenRandKey = () => 9;
Math.floor(Math.random * 9);

export const Encrypt = (input, key) => {
  const plaintext = input.toLowerCase().replace(/[^a-z]/g, "");
  let ciphertext = "";
  if (plaintext.length < 1) {
    return "please enter some plaintext";
  }
  if (key > Math.floor(2 * (plaintext.length - 1))) {
    return "key is too large for the plaintext length.";
  }
  if (key === 1) ciphertext = plaintext;
  else {
    ciphertext = "";
    let line;
    for (line = 0; line < key - 1; line++) {
      let skip = 2 * (key - line - 1);
      let j = 0;
      for (let i = line; i < plaintext.length; ) {
        ciphertext += plaintext.charAt(i);
        if (line === 0 || j % 2 === 0) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (let i = line; i < plaintext.length; i += 2 * (key - 1))
      ciphertext += plaintext.charAt(i);
  }
  return ciphertext;
};

export const Decrypt = (encryptedText, key) => {
  const ciphertext = encryptedText.toLowerCase().replace(/[^a-z]/g, "");
  if (ciphertext.length < 1) {
    return "please enter some ciphertext (letters only)";
  }
  if (key > Math.floor(2 * (ciphertext.length - 1))) {
    return "key is too large for the ciphertext length.";
  }
  if (key === 1) {
    return ciphertext;
  } else {
    let pt = new Array(ciphertext.length);
    let k = 0;
    let line;
    for (line = 0; line < key - 1; line++) {
      let skip = 2 * (key - line - 1);
      let j = 0;
      for (let i = line; i < ciphertext.length; ) {
        pt[i] = ciphertext.charAt(k++);
        if (line === 0 || j % 2 === 0) i += skip;
        else i += 2 * (key - 1) - skip;
        j++;
      }
    }
    for (let i = line; i < ciphertext.length; i += 2 * (key - 1)) {
      pt[i] = ciphertext.charAt(k++);
    }

    return pt.join("");
  }
};

// http://practicalcryptography.com/ciphers/classical-era/rail-fence/
// key 3
