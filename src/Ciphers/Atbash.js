const Encrypt = (input) => {
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

export default Encrypt;
