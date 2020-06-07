const Encrypt = (input, key) => {
  const plaintext = input.toLowerCase().replace(/[^a-z]/g, "");
  let ciphertext = "";
  if (plaintext.length < 1) {
    alert("please enter some plaintext");
    return;
  }
  if (key > Math.floor(2 * (plaintext.length - 1))) {
    alert("key is too large for the plaintext length.");
    return;
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

export default Encrypt;

// http://practicalcryptography.com/ciphers/classical-era/rail-fence/
