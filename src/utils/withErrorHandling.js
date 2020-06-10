/**
 * @param {function} textFunction the function to run @param text
 * @param {string} text the text to be run against the @param function
 *
 * @returns the output of the @param textFunction for the given input @param test or the error.message if it failed
 */
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
