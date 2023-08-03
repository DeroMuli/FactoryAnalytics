module.exports = {
  preset: "jest-expo",
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!(@miblanchard|@react-native|react-native|react-native-svg-charts)/)",
  ],
};
