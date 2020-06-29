const cipherExecutor = (encryptFunction) => (text) => (...args) => {
  let outputText = "";
  const unzipedArgs = Object.values(...args);
  try {
    outputText = encryptFunction(text, ...unzipedArgs);
  } catch (error) {
    outputText = error.message;
  }

  return outputText;
};

export default cipherExecutor;
