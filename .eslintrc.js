module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    DEVELOPMENT: false
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    semi: ["error", "always"]
  }
}