import { useState, useEffect } from "react";
import withErrorHandling from "./withErrorHandling";

const useCipherCard = ({ cipherProps }) => {
  const { text, encrypt, decrypt, shift = false } = cipherProps;

  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [showDecryption, setShowDecryption] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [cipherShift, setCipherShift] = useState(
    Math.floor(Math.random() * 26)
  );

  const cipherSpecificProps = {
    ...(shift && {
      cipherShift,
    }),
  };

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
    rollShift,
    toggleDecryptedText,
    toggleDescription,
  };
};

export default useCipherCard;
