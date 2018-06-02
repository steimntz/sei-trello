const {defaults} = require('jest-config');

module.exports = {
  transform: {
    "^.+\\.js?$": "babel-jest"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
}
