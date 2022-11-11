module.exports = {
    transform: {
        "^.+\\.scss$": 'jest-scss-transform',
        "^.+\\.(js|jsx)$": "babel-jest",
      },
      "testEnvironment": "jsdom"
  };