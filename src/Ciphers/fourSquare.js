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
    return "please enter some plaintext";
  }
  if (k1.length !== 25 || k2.length !== 25) {
    return "keysquare must be 25 characters in length";
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

export const GenRandKey = () => {
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

export const Decrypt = (encryptedText, key_1, key_2) => {
  let ciphertext = encryptedText
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[j]/g, "i");
  let k1 = key_1.toLowerCase().replace(/[^a-z]/g, "");
  let k2 = key_2.toLowerCase().replace(/[^a-z]/g, "");
  // do some error checking
  if (ciphertext.length < 1) {
    return "please enter some plaintext";
  }
  if (k1.length !== 25 || k2.length !== 25) {
    return "keysquare must be 25 characters in length";
  }
  if (ciphertext.length % 2 === 1) {
    return "ciphertext should be even length (wrong algorithm?)";
  }
  let plaintext = "";
  let rt = "abcdefghiklmnopqrstuvwxyz";
  for (let i = 0; i < ciphertext.length; i += 2) {
    let a = k1.indexOf(ciphertext.charAt(i)) % 5;
    let b = parseInt(k1.indexOf(ciphertext.charAt(i)) / 5);
    let c = k2.indexOf(ciphertext.charAt(i + 1)) % 5;
    let d = parseInt(k2.indexOf(ciphertext.charAt(i + 1)) / 5);
    plaintext += rt.charAt(5 * b + c);
    plaintext += rt.charAt(5 * d + a);
  }
  return plaintext.toLowerCase();
};

// http://practicalcryptography.com/ciphers/classical-era/four-square/
