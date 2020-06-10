import { useState, useEffect } from "react";
import withErrorHandling from "./withErrorHandling";

const useCipherCard = (
  text,
  encrypt,
  decrypt,
  shift = false,
  keyGenerator = null
) => {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [showDecryption, setShowDecryption] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [cipherShift, setCipherShift] = useState(
    Math.floor(Math.random() * 26)
  );
  const k1 = keyGenerator ? keyGenerator() : "";
  const k2 = keyGenerator ? keyGenerator() : "";
  const [key_1, setKey_1] = useState(k1);
  const [key_2, setKey_2] = useState(k2);

  const cipherSpecificProps = {
    ...(shift && {
      cipherShift,
    }),
    ...(key_1 &&
      key_2 && {
        key_1,
        key_2,
      }),
  };

  const generateFirstKey = () => setKey_1(keyGenerator());
  const generateSecondKey = () => setKey_2(keyGenerator());

  const toggleDecryptedText = () => {
    setShowDecryption(!showDecryption);
  };

  const toggleDescription = () => setShowDescription(!showDescription);

  const rollShift = () => {
    const randomShift = Math.floor(Math.random() * 26);
    setCipherShift(randomShift);
  };

  useEffect(() => {
    const newEncryptedText = text
      ? withErrorHandling(encrypt, text, cipherSpecificProps)
      : "Encrypted text";
    setEncryptedText(newEncryptedText);
  }, [encrypt, text, cipherSpecificProps]);

  useEffect(() => {
    const newDecryptedText =
      encryptedText === "Encrypted text"
        ? "Encrypted text"
        : withErrorHandling(decrypt, encryptedText, cipherSpecificProps);
    setDecryptedText(newDecryptedText);
  }, [decrypt, encryptedText, cipherSpecificProps]);

  return {
    encryptedText,
    decryptedText,
    cipherShift,
    showDescription,
    isChecked: showDecryption,
    key_1,
    key_2,
    rollShift,
    toggleDecryptedText,
    toggleDescription,
    generateFirstKey,
    generateSecondKey,
  };
};

export default useCipherCard;