/**
 * @param {function} textFunction the function to run @param text
 * @param {string} text the text to be run against the @param function
 * @param {object} props the cipher specific props like key, shifts, etc
 *
 * @returns the output of the @param textFunction for the given input @param test or the error.message if it failed
 */
const withErrorHandling = (textFunction, text, props) => {
  let outputText = "";
  const hasShift = Object.prototype.hasOwnProperty.call(props, "cipherShift");
  // check if there are any specific props to take into account
  if (hasShift) {
    const { cipherShift } = props;
    try {
      outputText = textFunction(text, cipherShift);
    } catch (error) {
      outputText = error.message;
    }
  } else {
    try {
      outputText = textFunction(text);
    } catch (error) {
      outputText = error.message;
    }
  }

  return outputText;
};

export default withErrorHandling;
