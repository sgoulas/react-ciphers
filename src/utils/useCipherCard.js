import { useState, useEffect } from "react";
import withErrorHandling from "./withErrorHandling";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard";

const useCipherCard = (
  text,
  encrypt,
  decrypt,
  shift = false,
  keyGenerator,
  numberOfKeys
) => {
  const [encryptedText, setEncryptedText] = useState("Encrypted text");
  const [decryptedText, setDecryptedText] = useState("Encrypted text");
  const [showDecryption, setShowDecryption] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [cipherShift, setCipherShift] = useState(
    shift ? Math.floor(Math.random() * 26) : 0
  );
  const k1 = numberOfKeys > 0 ? keyGenerator() : "";
  const k2 = numberOfKeys > 1 ? keyGenerator() : "";
  const [key_1, setKey_1] = useState(k1);
  const [key_2, setKey_2] = useState(k2);

  const cipherSpecificProps = {
    ...(shift && {
      cipherShift,
    }),
    ...(numberOfKeys === 1 && {
      key_1,
    }),
    ...(numberOfKeys === 2 && {
      key_1,
      key_2,
    }),
  };

  const generateFirstKey = () => setKey_1(keyGenerator());
  const generateSecondKey = () => setKey_2(keyGenerator());
  const toggleDecryptedText = () => setShowDecryption(!showDecryption);
  const toggleDescription = () => setShowDescription(!showDescription);
  const copyEncryptedText = () => {
    copy(encryptedText);
    toast.info("Copied to clipboard!");
  };

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
    showDecryption,
    key_1,
    key_2,
    rollShift,
    toggleDecryptedText,
    toggleDescription,
    generateFirstKey,
    generateSecondKey,
    copyEncryptedText,
  };
};

export default useCipherCard;
