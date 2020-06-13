# What I learned developing this app

## Jest + ES6 imports

### 1.)Jest does not automatically recognize the ES6 import statement

steps to fix:

a.)npm install --save-dev babel-jest @babel/preset-env (skip if app created with create-react-app as it already has babel)
b.)nano babel.config.js
c.) inside babel.config.js:

`babel.config.js`
```module.exports = {
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

```const [encryptedText, setEncryptedText] = useState("");```

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

```const [encryptedText, setEncryptedText] = useState("Encrypted text");```

### 8.) How to automatically run Jest on pre-commit and pre-push and not permitting them if the tests fail.
