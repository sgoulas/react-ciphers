const withErrorHandling = (textFunction, text) => {
  let outputText = "";

  try {
    outputText = textFunction(text);
  } catch (error) {
    outputText = error.message;
  }

  return outputText;
};

export default withErrorHandling;
