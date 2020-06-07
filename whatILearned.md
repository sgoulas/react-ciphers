Jest + ES6 imports

1.)Jest does not automatically recognizes the ES6 import statement

steps to fix:

a.)npm install --save-dev babel-jest @babel/preset-env
b.)nano babel.config.js
c.) inside babel.config.js:

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

d.) Instead pf export default you should export {myExportedFunction} or export const foo = () =>{}

(https://medium.com/@saplos123456/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c)

2.) Some ciphers like Foursquare append 'x' or some other letters. Therefor I wanted to test for substrings but Jest does not support
them. Solution: jest-extended

For jest-extended to be implemented, also create a jest.config.js file and setup setupFilesAfterEnv: ["jest-extended"],
