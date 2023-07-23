//no clue this works without adding any transform specifically for tsx/ts files
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
