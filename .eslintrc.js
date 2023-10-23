module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'eslint:recommended'],
  parser: '@babel/eslint-parser', // Updated parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-console': 1,
  },
};
