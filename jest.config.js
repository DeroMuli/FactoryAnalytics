module.exports = {
  preset: "jest-expo",
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!(@miblanchard|@react-native|react-native|react-native-svg-charts|@expo/vector-icons|expo-font|expo-modules-core|expo-asset|expo-constants)/)",
  ],
};
