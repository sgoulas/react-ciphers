export const Encrypt = (input) => {
  return btoa(input);
};

export const Decrypt = (input) => {
  return atob(input);
};

// http://practicalcryptography.com/ciphers/classical-era/base64/
