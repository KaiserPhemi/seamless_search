module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  verbose: true,
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "json"],
  coverageReporters: ["json", "lcov", "text", "clover"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/testSetup.js"]
};
