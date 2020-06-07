export const Encrypt = (input, key_1, key_2) => {
  let ciphertext = "";
  let plaintext = input
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/[j]/g, "i");
  const k1 = key_1.toLowerCase().replace(/[^a-z]/g, "");
  const k2 = key_2.toLowerCase().replace(/[^a-z]/g, "");
  // do some error checking
  if (plaintext.length < 1) {
    alert("please enter some plaintext (letters and numbers only)");
    return;
  }
  if (k1.length !== 25 || k2.length !== 25) {
    alert("keysquare must be 25 characters in length");
    return;
  }
  if (plaintext.length % 2 === 1) plaintext += "x";
  ciphertext = "";
  const alphabet = "abcdefghiklmnopqrstuvwxyz";
  for (let i = 0; i < plaintext.length; i += 2) {
    const a = alphabet.indexOf(plaintext.charAt(i)) % 5;
    const b = parseInt(alphabet.indexOf(plaintext.charAt(i)) / 5);
    const c = alphabet.indexOf(plaintext.charAt(i + 1)) % 5;
    const d = parseInt(alphabet.indexOf(plaintext.charAt(i + 1)) / 5);
    ciphertext += k1.charAt(5 * b + c);
    ciphertext += k2.charAt(5 * d + a);
  }
  return ciphertext.toUpperCase();
};

export const GenRandKey = (k) => {
  const keychars = "abcdefghiklmnopqrstuvwxyz";
  const chars = keychars.split("");
  let key = "";
  const lim = chars.length;
  for (let i = 0; i < lim; i++) {
    let index = Math.floor(chars.length * Math.random());
    key += chars[index];
    chars.splice(index, 1);
  }

  return key.toUpperCase();
};

// http://practicalcryptography.com/ciphers/classical-era/four-square/
