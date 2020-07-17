# What I learned developing this app

## Jest + ES6 imports

### 1.)Jest does not automatically recognize the ES6 import statement

steps to fix:

a.)npm install --save-dev babel-jest @babel/preset-env (skip if app created with create-react-app as it already has babel)
b.)nano babel.config.js
c.) inside babel.config.js:

`babel.config.js`

```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

d.) Instead of export default you should export {myExportedFunction} or export const foo = () =>{}

(https://medium.com/@saplos123456/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c)

### 2.) Some ciphers like Foursquare append 'x' or some other letters. Therefore I wanted to test for substrings but Jest does not support them. Solution: jest-extended

For jest-extended to be implemented, also create a jest.config.js file and setup setupFilesAfterEnv: ["jest-extended"],

### 3.) Material UI baseline styles a variety of different html elements (body including) and due to specificity can override my styles.

### 4.) Use createMuiTheme to make a simple breakpoints only theme to use custom break points on, without the need of a full fledged theme.

### 5.) Set test script from 'react-scripts test' to 'jest' to run jest with 'npm test'

### 6.) Changed the capitalization from Filename to filename but git did not pick up the renaming.

Solution => rename filename to 1filename, add, rename 1filename to filename, add, commit.

### 7.) Constant re-renders.

what I was doing wrong:

`const [encryptedText, setEncryptedText] = useState("");`

```useEffect(() => {
  useEffect(() => {
    const newEncryptedText = text
      ? withErrorHandling(encrypt, text, cipherSpecificProps)
      : "Encrypted text"; // <--- this is the default value, but I am setting it just now
    setEncryptedText(newEncryptedText);
  }, [encrypt, text, cipherSpecificProps]);

```

So the 'encryptedText' I was getting back was '', then 'Encrypted text' and that was forcing a re-render.

correct approach:

`const [encryptedText, setEncryptedText] = useState("Encrypted text");`

### 8.) How to automatically run Jest on pre-commit and pre-push and not permitting them if the tests fail.

### 9.) How to configure jest + react-testing-library + babel

At first, Jest was not recognizing the `<` token when rendering a react component. The solution was to include `preset-react`
in the `babel.config.js`.

```module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

```

Then the problem was that Jest was not recognizing `.css` files being imported in `.jss` files. The solution was to
stub the css files using the `moduleNameMapper` configuration. So the updated version of `jest.config.js` was

```module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["jest-extended"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

```

### 10.) How to setup multiple test libraries / extenders in a centralized way

Use `setupFilesAfterEnv` property to indicate a `setup` javascript file that imports all the libraries / extenders that you want to include in your test like "jest-extended" of point `2`.

### 11.) Difference between render of @testing-library and renderer of react-test-renderer

`@testing-library` `render` method creates a dom element and appends it in the document body, whereas `react-test-renderer` `renderer` method renders React components are pure objects without depending on the dom or a native mobile environment.

### 12.) It is harder to test a <TextField /> component that gets both `text` and `setText` from its parent component.

By keeping both `text` and `setText` inside the <TextField /> it is easier to write a unit test since the update functionality
is enclosed inside the component. Updates in the father can take place via a single `updateInput` function. This also reduces
the amount of constantly changing props that are passed down to the <TextField /> component, thus increasing the performance.

### 13.) Material-UI components need different handling with react-testing-library.

For example, the <TextField /> component is not just an input, but a wrapper of dom elements (like form control) plus an input.

There are two different approaches to test the component:

add the `data-testid` attribute on the <TextField /> component and then query inside the `.test.js` file for the `input` element

```
<CssTextField
      className={classes.margin}
      label="Start typing"
      data-testid="plain-text-input"
      value={text}
      onChange={handleChange}
    />

    // ....

    const textInput = renderer
      .getByTestId("plain-text-input")
      .querySelector("input");

```

or add the `data-testid` attribute directly to the `input` element and thus query directly for it.

```
<CssTextField
      className={classes.margin}
      label="Start typing"
      inputProps={{ "data-testid": "plain-text-input" }}
      value={text}
      onChange={handleChange}
    />

    // ....

    const textInput = renderer.getByTestId("plain-text-input");

```

The `first` way makes the unit test more verbose but keeps the component simple.
The `second` way makes the unit test easier to read but makes the component more verbose.

That being said, the `second` way feels more correct, since it adds the data-testid to the dom element we actually want to test,
rather to the wrapper that contains the element we want to test.

### 14.) Use queryBy instead of getBy when wanting to test that something does not exist, since the getBy matcher throws an error when it does not find what it is looking for.
