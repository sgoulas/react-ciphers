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
  const containsFirstKey = Object.prototype.hasOwnProperty.call(props, "key_1");
  const containsSecondKey = Object.prototype.hasOwnProperty.call(
    props,
    "key_2"
  );
  // check if there are any specific props to take into account
  if (hasShift) {
    const { cipherShift } = props;
    try {
      outputText = textFunction(text, cipherShift);
    } catch (error) {
      outputText = error.message;
    }
  } else if (containsFirstKey && containsSecondKey) {
    const { key_1, key_2 } = props;
    try {
      outputText = textFunction(text, key_1, key_2);
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
