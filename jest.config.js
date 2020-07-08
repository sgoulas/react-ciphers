module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["jest-extended"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
