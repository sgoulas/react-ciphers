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
  const containsSingleKey = Object.prototype.hasOwnProperty.call(
    props,
    "singleKey"
  );
  const containsTwoKeys =
    Object.prototype.hasOwnProperty.call(props, "key_1") &&
    Object.prototype.hasOwnProperty.call(props, "key_2");

  try {
    if (hasShift) {
      const { cipherShift } = props;
      outputText = textFunction(text, cipherShift);
    } else if (containsTwoKeys) {
      const { key_1, key_2 } = props;
      outputText = textFunction(text, key_1, key_2);
    } else if (containsSingleKey) {
      const { singleKey } = props;
      outputText = textFunction(text, singleKey);
    } else {
      outputText = textFunction(text);
    }
  } catch (error) {
    outputText = error.message;
  }

  return outputText;
};

export default withErrorHandling;
